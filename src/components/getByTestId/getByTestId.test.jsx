import { render } from "@testing-library/react";
import GetByTestId from "./getByTestId";

// avec cette méthode faut specifier l'id dans le jsx de manière suivante : data-testid="testId"
test("render by testId", () => {
  const { getByTestId } = render(<GetByTestId />);
  const link = getByTestId("testId");
  expect(link.textContent).toBe("Link text");
});
