import Head from "next/head";
import { Container } from "../components/container";
import { Header } from "../components/header";
import { Layout } from "../components/layout";

function Index(): JSX.Element {
  return (
    <>
      <Layout>
        <Head>
          <title>Thoughts by Josef Polodna</title>
        </Head>
        <Container>
          <Header />
          <p>Landing Page</p>
        </Container>
      </Layout>
    </>
  );
}

export default Index;
