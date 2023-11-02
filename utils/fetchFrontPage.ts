import { FrontPage } from "@/typings";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";

const query = groq`
    *[_type == "frontPage"][0]
`;

export async function fetchFrontPage() {
  console.log("Executing fetchFrontPage");
  console.log("Base URL:", process.env.NEXT_PUBLIC_BASE_URL);
  const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/getFrontPage`;
  console.log("API URL:", apiUrl); // Log the constructed API URL

  const res = await sanityClient.fetch(query);
  // console.log("Response status:", res.status);
  // console.log("Response headers:", res.headers);
  // console.log("API response:", res);

  const data = await res.json();

  console.log("API response data:", data);
  const frontPage: FrontPage = data.frontPage;

  console.log("Page info:", frontPage);

  return frontPage;
}
