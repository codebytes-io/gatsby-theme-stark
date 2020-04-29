import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ActiveIndicator from "./active-indicator";

describe("ActiveIndicator", () => {
  it("is full width when isHovered prop passed", () => {
    const { getByTestId } = render(<ActiveIndicator isHovered />);
    const indicator = getByTestId("active-indicator");
    expect(indicator).toHaveStyle("width: 100%");
  });

  it("is 24px wide when isHovered prop passed", () => {
    const { getByTestId } = render(<ActiveIndicator isActive />);
    const indicator = getByTestId("active-indicator");
    expect(indicator).toHaveStyle("width: 24px");
  });

  it("is 0px wide when neither isHovered or isActive prop passed", () => {
    const { getByTestId } = render(<ActiveIndicator />);
    const indicator = getByTestId("active-indicator");
    expect(indicator).toHaveStyle("width: 0px");
  });
});
