import React from "react";
import SocialLinks, { SocialLink } from "./social-links";

export default {
  title: "Social Links",
  component: SocialLinks,
};

const links: SocialLink[] = [
  {
    type: "twitter",
    link: "https://twitter.com/codebytes_io",
  },
  {
    type: "facebook",
    link: "https://www.facebook.com/codebytesio",
  },
  {
    type: "instagram",
    link: "https://www.instagram.com/codebytes_io/",
  },
  {
    type: "dribbble",
    link: "https://dribbble.com/codebytes",
  },
  {
    type: "linkedin",
    link: "https://www.linkedin.com/company/34639510",
  },
];

export const Default = () => <SocialLinks links={links} />;
