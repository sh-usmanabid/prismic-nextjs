import Head from 'next/head';
import Header from "../components/global-components/header";
import Footer from "../components/global-components/footer";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Prismic NextJS</title>
        <meta name="description" content="Prismic NextJS Demo" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}