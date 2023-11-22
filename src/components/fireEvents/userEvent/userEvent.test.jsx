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

// userEvent.selectOptions() and useState()
test("render heading test when selected optionselected option", () => {
  render(<UserEvent />);
  const select = screen.getByRole("combobox");
  const heading = screen.getByRole("heading", { name: "Mumbai" });
  userEvent.selectOptions(select, "Mumbai");

  expect(heading).toBeInTheDocument();
});

// userEvent.hover()
test("render visible span to hover", () => {
  render(<UserEvent />);
  const paragraphe = screen.getByText("Hover over me");
  const span = screen.getByText("Tooltip text");
  userEvent.hover(paragraphe);
  expect(span).toBeVisible();
});

// userEvent.upload()
test("upload Fille", () => {
  render(<UserEvent />);
  const label = screen.getByLabelText("Upload File :");
  const input = screen.getByTestId("inputFile");
  const file = new File(["file"], "img.png", {
    type: "image/png",
  });
  userEvent.upload(input, file);
  screen.logTestingPlaygroundURL();
  expect(input.files[0]).toEqual(file);
});
