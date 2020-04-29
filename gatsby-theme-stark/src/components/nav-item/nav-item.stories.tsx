import React from "react";
import NavItem from "./nav-item";

export default {
  title: "Nav Item",
  component: NavItem,
};

export const Default = () => <NavItem name="About" link="#" />;

export const Active = () => <NavItem name="About" link="#" isActive />;
