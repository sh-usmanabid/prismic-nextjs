import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

export default function Home({ page }) {
  return (
    <SliceZone slices={page.data.slices} components={components} />
  )
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });
  const page = await client.getByUID("page", "home");

  return {
    props: { page },
  };
}
