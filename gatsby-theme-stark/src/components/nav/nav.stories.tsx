import React from "react";
import Nav from "./nav";
import NavItem from "../nav-item";

export default {
  title: "Nav",
  component: Nav,
};

export const Default = () => (
  <Nav>
    <NavItem name="Home" link="#" isActive />
    <NavItem name="About" link="#" />
    <NavItem name="Blog" link="#" />
    <NavItem name="Contact" link="#" />
  </Nav>
);
