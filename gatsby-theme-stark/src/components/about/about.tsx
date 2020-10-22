import React from "react";
import Page from "../page";

const title = "About";
const content =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor tortor sit amet orci placerat, ut pharetra tortor ultrices. Maecenas sed sapien dolor. Pellentesque neque neque, suscipit eu massa id, scelerisque commodo felis. Nulla eu scelerisque leo, nec dignissim nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce erat justo, efficitur a convallis non, pellentesque id orci. Aenean tincidunt non risus id aliquam.";

const About = () => {
  return <Page title={title} content={content} />;
};

export default About;
