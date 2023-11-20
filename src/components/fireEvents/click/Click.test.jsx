import { render, screen, fireEvent } from "@testing-library/react";
import Click from "./Click";

test("render button text to click", () => {
  render(<Click />);
  const input = screen.getByRole("textbox");
  expect(input).toHaveValue("");
  fireEvent.change(input, { target: { value: "hello" } });
  expect(input.value).toBe("hello");
  const button = screen.getByRole("button");
  fireEvent.click(button);
  expect(input.value).toBe("");
});
