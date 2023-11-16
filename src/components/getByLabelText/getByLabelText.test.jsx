import { render, screen } from "@testing-library/react";
import GetByLabelText from "./getByLabelText";

test("renders learn label", () => {
  render(<GetByLabelText />);
  const label = screen.getByLabelText(/Enter text:/i);
  expect(label).toBeInTheDocument();
});
