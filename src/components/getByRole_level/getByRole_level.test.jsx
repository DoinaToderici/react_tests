import { render } from "@testing-library/react";
import GetByRole_level from "./getByRole_level";

test("render heading level 2", () => {
  const { getAllByRole } = render(<GetByRole_level />);
  const headingLevel2 = getAllByRole("heading", { level: 2 });

  expect(headingLevel2[0].textContent).toBe("Level 2");
});
