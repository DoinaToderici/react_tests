import { fireEvent, render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import FormUserEvent from "./formUserEvent";

// userEvent.selectOptions()
describe("Test FormUserEvent", () => {
  const setUp = () => {
    const utils = render(<FormUserEvent />);

    const nameInput = utils.getByPlaceholderText("Enter name");
    const pswInput = utils.getByPlaceholderText("Enter password");
    const select = utils.getByLabelText("Select Country");
    const submitBtn = utils.getByRole("button", { name: "Submit" });

    return { nameInput, pswInput, select, submitBtn };
  };

  it("render visible all elements form", () => {
    const { nameInput, pswInput, select, submitBtn } = setUp();
    expect(nameInput).toBeVisible();
    expect(pswInput).toBeVisible();
    expect(select).toBeVisible();
    expect(submitBtn).toBeVisible();
  });

  it("render submited form message", () => {
    const { nameInput, pswInput, select, submitBtn } = setUp();

    userEvent.type(nameInput, "Doina");
    userEvent.type(pswInput, "123");
    userEvent.selectOptions(select, "India");
    userEvent.click(submitBtn);

    expect(screen.getByText(/Form Submitted/i)).toBeInTheDocument();
  });

  it("Empty fields error shown", () => {
    const { nameInput, pswInput, select, submitBtn } = setUp();
    userEvent.type(nameInput, "ee");
    userEvent.type(pswInput, "");
    userEvent.selectOptions(select, "India");
    userEvent.click(submitBtn);
    expect(screen.getByText(/Please fill all the details/i)).toBeVisible();
  });

  it("Name not match regex", () => {
    const { nameInput, pswInput, select, submitBtn } = setUp();
    userEvent.type(nameInput, "123");
    userEvent.type(pswInput, "456");
    userEvent.selectOptions(select, "India");
    userEvent.click(submitBtn);
    expect(screen.getByText(/Please enter a valid name/i)).toBeVisible();
  });
});
