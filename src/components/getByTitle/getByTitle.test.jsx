import { fireEvent, render } from "@testing-library/react";
import GetByTitle from "./getByTitle";

test("renders text button before and after click event", () => {
  const { getByTitle } = render(<GetByTitle />);
  const buttonElement = getByTitle("title");
  expect(buttonElement).toBeInTheDocument();
  fireEvent.click(buttonElement);
  const newButtonElement = getByTitle("new title");
  expect(newButtonElement).toBeInTheDocument();
});
