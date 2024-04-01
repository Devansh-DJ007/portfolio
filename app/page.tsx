import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experiences";
import Project from "@/components/Project";
import Techstack from "@/components/Techstacks";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import { sanityClient } from "@/sanity";

export const revalidate = 30;

export default async function Home() {
  const frontPage = await sanityClient.fetch(`*[_type == "frontPage"]{
    ...,
    "resumeURL": resume.asset->url
  }`);
  const social = await sanityClient.fetch(
    `*[_type == "social"] | order(_createdAt asc)`
  );
  const experience =
    await sanityClient.fetch(`*[_type == "experience"] | order(_createdAt desc) {
    ...,
    skills[]->
  }`);
  const project = await sanityClient.fetch(
    `*[_type == "project"] | order(_createdAt desc)`
  );
  const techstack = await sanityClient.fetch(
    `*[_type == "techstack"] | order(_createdAt asc)`
  );
  return (
    <div className="max-w-screen bg-black text-white ">
      <Header frontPage={frontPage[0]} />
      <div id="hero">
        <Hero frontPage={frontPage[0]} social={social} />
      </div>
      <Experience experiences={experience} />
      <div id="projects">
        <Project projects={project} />
      </div>
      <Techstack techstack={techstack} />
      <ContactMe frontPage={frontPage[0]} social={social} />
      <Footer />
    </div>
  );
}
