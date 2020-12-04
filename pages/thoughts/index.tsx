import Head from "next/head";
import { Container } from "../../components/container";
import { Header } from "../../components/header";
import { Layout } from "../../components/layout";
import { PostPreview } from "../../components/PostPreview";
import { getAllPosts } from "../../lib/api";
import { PostType } from "../../types/post";

interface Props {
  allPosts: PostType[];
}

function Thoughts({ allPosts }: Props): JSX.Element {
  return (
    <>
      <Layout>
        <Head>
          <title>Thoughts by Josef Polodna</title>
        </Head>
        <Container>
          <Header />
          <section className="flex flex-col items-center md:justify-between pt-6 mb-16 md:mb-12">
            <h1 className="text-6xl md:text-8xl font-bold tracking-wide leading-tight md:pr-8 cursor-pointer">
              Thoughts
            </h1>
            <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
              on Software Engineering, Functional Programming, and Front End
              Development
            </h4>
          </section>
          <section className="max-w-2xl flex flex-col justify-center mx-auto  ">
            <div className="flex flex-col mb-4">
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

export default Thoughts;

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
