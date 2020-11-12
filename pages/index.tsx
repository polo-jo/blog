import Head from "next/head";
import { Container } from "../components/container";
import { Layout } from "../components/layout";
import { PostPreview } from "../components/post-preview";
import { getAllPosts } from "../lib/api";
import { PostType } from "../types/post";

type Props = {
  allPosts: PostType[];
};

function Index({ allPosts }: Props): JSX.Element {
  return (
    <>
      <Layout>
        <Head>
          <title>Thoughts by Josef Polodna</title>
        </Head>
        <Container>
          <section className="flex flex-col items-center md:justify-between mt-16 mb-16 md:mb-12">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
              Thoughts.
            </h1>
            <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
              on Software Engineering, Functional Programming, and Front End
              Development
            </h4>
          </section>
          <section>
            <div className="flex flex-col mb-32">
              {allPosts.map((post) => (
                <PostPreview
                  key={post.slug}
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                  author={post.author}
                  slug={post.slug}
                  excerpt={post.excerpt}
                />
              ))}
            </div>
          </section>
        </Container>
      </Layout>
    </>
  );
}

export default Index;

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}
