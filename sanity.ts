import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: 'jn6hfi0s',
  apiVersion: "2023-05-03",
  useCdn: process.env.NEXT_ENV === 'production',
};

export const sanityClient = createClient(config);

export const urlFor = (source: any) => 
    createImageUrlBuilder(config).image(source);