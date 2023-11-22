import { fireEvent, render, screen } from "@testing-library/react";
import UserEvent from "./userEvent";
import userEvent from "@testing-library/user-event";

// userEvent.selectOptions()
test("render selected option", () => {
  render(<UserEvent />);
  const select = screen.getByRole("combobox");
  userEvent.selectOptions(select, "Bangalore");
  expect(select).toHaveValue("Bangalore");
});

// userEvent.selectOptions()
test("render heading test when selected optionselected option", () => {
  render(<UserEvent />);
  const select = screen.getByRole("combobox");
  const heading = screen.getByRole("heading", { name: "Mumbai" });
  userEvent.selectOptions(select, "Mumbai");

  expect(heading).toBeInTheDocument();
});
