import React from "react";
import Copyright from "./copyright";

export default {
  title: "Copyright",
  component: Copyright,
};

const links = [
  {
    name: "Privacy",
    url: "#",
  },
  {
    name: "Terms",
    url: "#",
  },
];

export const Default = () => <Copyright links={links} />;
