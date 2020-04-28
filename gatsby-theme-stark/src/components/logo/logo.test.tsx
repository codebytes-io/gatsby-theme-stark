import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Logo from "./logo";

const title = "Stark.";
const subtitle = "A creative portfolio theme.";

describe("Logo", () => {
  it("displays the title", () => {
    const { queryByText } = render(<Logo title={title} subtitle={subtitle} />);
    const foundTitle = queryByText(title);
    expect(foundTitle).toBeTruthy();
  });

  it("displays the subtitle if one is passed", () => {
    const { queryByText } = render(<Logo title={title} subtitle={subtitle} />);
    const foundSubtitle = queryByText(subtitle);
    expect(foundSubtitle).toBeTruthy();
  });

  it("doesn't display subtitle if no subtitle is passed", () => {
    const { queryByText } = render(<Logo title={title} />);
    const foundSubtitle = queryByText(subtitle);
    expect(foundSubtitle).toBeFalsy();
  });
});
