import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Button from "./button";

describe("Button", () => {
  it("renders", () => {
    const { container } = render(<Button />);
    console.log(container);
  });
});
