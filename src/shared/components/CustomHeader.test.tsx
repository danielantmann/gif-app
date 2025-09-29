import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { CustomHeader } from "./CustomHeader";

describe("CustomHeader", () => {
  const title = "Test-title";

  test("should render title correctly", () => {
    render(<CustomHeader title={title} />);
    expect(screen.getByText(title)).toBeDefined();
  });

  test("should render description correctly", () => {
    const description = "test-desccription";
    render(<CustomHeader title={title} description={description} />);
    expect(screen.getByText(description)).toBeDefined();
    expect(screen.getByRole("paragraph").innerHTML).toBe(description);
  });

  test("should not render description when not provided", () => {
    const { container } = render(<CustomHeader title={title} />);
    const divElement = container.querySelector(".content-center");
    const p = divElement?.querySelector("p");
    screen.debug();
    expect(p).toBeNull();
  });
});
