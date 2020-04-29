import React from "react";
import ActiveIndicator from "./active-indicator";

export default {
  title: "ActiveIndicator",
  component: ActiveIndicator,
};

export const Hovered = () => <ActiveIndicator isHovered />;
export const Active = () => <ActiveIndicator isActive />;
