import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ToDoList from "./toDoList";
import Form from "./partials/Form";

const onClickHeandler = jest.fn();
const onSubmitHeandler = jest.fn();
const onChangeHeandler = jest.fn();

const setUp = () => {
  const utils = render(
    <Form onSubmit={onSubmitHeandler} onChange={onChangeHeandler} />
  );
  const input = utils.getByRole("textbox");
  const btn = utils.getByRole("button");
  const form = utils.getByTestId("form");

  return { input, btn, form, ...utils };
};

describe("ToDoList Tests", () => {
  const { input, btn, form } = setUp();

  test("Render HTML Elements", () => {
    render(<ToDoList />);
    expect(input).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(form).toBeInTheDocument();
  });

  describe("Test events", () => {
    it("Test change event", () => {
      fireEvent.change(input, { target: { value: "new task" } });
      expect(onChangeHeandler).toHaveBeenCalled;
      expect(input.value).toBe("new task");
    });

    it("Test submit event", () => {
      fireEvent.change(input, { target: { value: "new task" } });
      expect(onSubmitHeandler).toHaveBeenCalled;
    });

    it("reset input value", () => {
      fireEvent.change(input, { target: { value: "new task" } });
      fireEvent.submit(form);
      expect(input.textContent).toBe("");
    });
  });

  describe("Test list items", () => {
    test("Render visible list", () => {
      fireEvent.change(input, { target: { value: "new task" } });
      fireEvent.submit(form);
      expect(screen.getByTestId("list")).toBeVisible();
    });
  });

  // describe("Form validation", () => {});
});
