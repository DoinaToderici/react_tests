import { render, screen } from "@testing-library/react";
import GetByDisplayValue from "./getByDisplayValue";

test("renders learn label", () => {
  const { getByDisplayValue } = render(<GetByDisplayValue />);
  const label = getByDisplayValue(/new value/i);
  expect(label).toBeInTheDocument();
});
