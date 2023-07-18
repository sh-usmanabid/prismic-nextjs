import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '@/prismicio'
import Layout from "@/layouts/default";
import "../globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <PrismicPreview repositoryName={repositoryName} />
    </Layout>
  );
}
