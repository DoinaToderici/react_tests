import { render, screen, fireEvent } from "@testing-library/react";
import Click from "./Click";

test("render button text to click", () => {
  render(<Click />);
  const textButton = screen.getByText("Hello");
  expect(textButton.textContent).toBe("Hello");
  fireEvent.click(textButton);
  expect(textButton.textContent).toBe("Bye");
});
