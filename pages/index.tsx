import Head from "next/head";
import { Container } from "../components/container";
import { Header } from "../components/header";
import { Layout } from "../components/layout";
import Image from "next/image";
import { ReactNode } from "react";
import Link from "next/link";

function Index(): JSX.Element {
  return (
    <>
      <Layout>
        <Head>
          <title>Thoughts by Josef Polodna</title>
        </Head>
        <Container>
          <Header />
          <div className="lg:grid lg:grid-cols-4 lg:gap-4">
            <section className="lg:col-span-2 lg:items-center">
              <h3 className="text-grey-500 text-xl">Josef Polodna (polo-jo)</h3>
              <h1 className="text-7xl font-semibold">Hello 👋, </h1>
              <p>
                I am a <BoldText>Front End Engineer</BoldText>, occasional{" "}
                <BoldText>Designer</BoldText>, lover of <BoldText>UX</BoldText>,
                and <BoldText>Functional Programming</BoldText> enthusiast.
              </p>
              <p className="pt-6">
                I love overthinking things and sharing my{" "}
                <BoldText>
                  <Link href="/thoughts">
                    <a className="text-secondary">thoughts</a>
                  </Link>
                </BoldText>
                . Always learning.
              </p>
            </section>

            <section className="lg:col-span-2 lg:items-center lg:justify-center lg:flex">
              <Image
                className="rounded-2xl lg:place-self-center"
                src="/assets/blog/coffee-portrait.jpg"
                width="567"
                height="756"
              />
            </section>
          </div>
        </Container>
      </Layout>
    </>
  );
}

interface BoldTextProps {
  children: ReactNode;
}

function BoldText(props: BoldTextProps): JSX.Element {
  return <span className="font-bold">{props.children}</span>;
}

export default Index;
