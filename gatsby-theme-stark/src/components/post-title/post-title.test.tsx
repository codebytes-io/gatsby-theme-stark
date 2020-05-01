import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PostTitle from "./post-title";

const title = "Praesent volutpat, neque lobortis luctus scelerisque";

describe("NavItem", () => {
  it("displays the title", () => {
    const { queryByText } = render(<PostTitle>{title}</PostTitle>);
    const foundName = queryByText(title);
    expect(foundName).toBeTruthy();
  });
});
