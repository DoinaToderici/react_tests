import { fireEvent, render } from "@testing-library/react";
import GetByRole from "./getByRole";

test("renders button by role", () => {
  const { getByRole } = render(<GetByRole />);
  const buttonElement = getByRole("button");
  expect(buttonElement).toHaveTextContent("😃");

  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveTextContent("😞");
});
