import { render, within } from "@testing-library/react";
import GetbyRole_within from "./getbyRole-within";

test("render heading with <within>", () => {
  const { getByRole } = render(<GetbyRole_within />);
  const banner = getByRole("banner");
  const heading = within(banner).getByRole("heading");
  expect(heading.textContent).toBe("We will recupere this heading");
});
