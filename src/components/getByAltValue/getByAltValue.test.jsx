import { render } from "@testing-library/react";
import GetByAltValue from "./getByAltValue";

test("renders learn alt img", () => {
  const { getByAltText } = render(<GetByAltValue />);
  const img = getByAltText(/flowers alt/i);
  expect(img).toBeInTheDocument();
});
