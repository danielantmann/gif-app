import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import { GifApp } from "./GifApp";
describe("GifaApp", () => {
  test("should rendern components properly", () => {
    const { container } = render(<GifApp />);
    expect(container).toMatchSnapshot();
  });
});
