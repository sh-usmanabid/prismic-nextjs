import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

export default function ContactUs({ page }) {
  return (
    <SliceZone slices={page.data.slices} components={components} />
  )
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });
  const page = await client.getByUID("page", "contact-us");

  return {
    props: { page },
  };
}