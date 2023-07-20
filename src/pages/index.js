import Head from "next/head";

import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { Layout } from "@/layouts/default";

export default function Page({ page, navigation, settings }) {
  return (
    <Layout navigation={navigation} settings={settings}>
      <Head>
        <title>{page.data.metatitle}</title>
        <meta name="description" content={page.data.metadescription}></meta>
      </Head>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", "home");
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");

  return {
    props: {
      page,
      navigation,
      settings
    },
  };
}
