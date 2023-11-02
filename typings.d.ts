type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
};

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

interface Resume {
  _type: "file"; 
  asset: {
    _ref: string; // The reference to the asset (file) document
    _type: "reference"; // The type of the reference
  };
}

export interface Social extends Base {
  _type: "social";
  title: string;
  url: string;
}

export interface skill extends Base {
  _type: "skill";
  title: string;
  image: Image;
}

export interface FrontPage extends Base {
  _type: "pageInfo";
  name: string;
  initials: string;
  mainImage: Image;
  description: string;
  resume: Resume;
  resumeURL: string;
}

export interface Experience extends Base {
  _type: "experience";
  company: string;
  image: Image;
  position: string;
  timeline: string;
  description: string;
  skills: skill[];
}

export interface Project extends Base {
  _type: "project";
  title: string;
  image: Image;
  description: string;
  link: string;
}

export interface Techstack extends Base {
  _type: "techstack";
  title: string;
  image: Image;
}