import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NavItem from "./nav-item";

const name = "About";
const link = "/about";

describe("NavItem", () => {
  it("displays item name", () => {
    const { queryByText } = render(<NavItem name={name} link={link} />);
    const foundName = queryByText("About");
    expect(foundName).toBeTruthy();
  });

  it("has item link as href", () => {
    const { container } = render(<NavItem name={name} link={link} />);
    const a = container.querySelector("a");
    expect(a.getAttribute("href")).toEqual(link);
  });
});
