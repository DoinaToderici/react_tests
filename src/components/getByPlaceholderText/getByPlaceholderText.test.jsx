import { render, screen } from "@testing-library/react";
import GetByPlaceholderText from "./getByPlaceholderText";

test("renders learn placeholder", () => {
  const { getByPlaceholderText } = render(<GetByPlaceholderText />);

  const placeholder = getByPlaceholderText("Enter your text");
  expect(placeholder).toBeInTheDocument();
});
