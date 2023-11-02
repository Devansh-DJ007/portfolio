
export default {
  name: "frontPage",
  title: "FrontPage",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "initials",
      title: "Initials",
      type: "string",
    },
    {
      name: "mainImage",
      title: "MainImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "resume",
      title: "Resume",
      type: "file",
      description: "Upload the PDF file of your resume here",
    },
  ],
};
