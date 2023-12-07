import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";

import ToDoList from "./toDoList";

const setUp = () => {
  const utils = render(
    <>
      <ToDoList />
    </>
  );
  const inputTask = utils.getByRole("textbox", {
    target: { name: "taskInput" },
  });
  const inputUpdateTask = utils.getByRole("textbox", {
    target: { name: "updateInput" },
  });
  const submitItemBtn = utils.getByText("Add in list");

  const form = utils.getByTestId("form");

  return { inputTask, submitItemBtn, form, utils };
};

describe("ToDoList Tests", () => {
  const { inputTask, submitItemBtn, form, utils } = setUp();

  test("Render HTML Elements", () => {
    expect(form).toBeInTheDocument();
    expect(inputTask).toBeInTheDocument();
    expect(submitItemBtn).toBeInTheDocument();
  });

  test("Test writing a new task", () => {
    fireEvent.change(inputTask, { target: { value: "This is a new task" } });
    expect(inputTask.value).toBe("This is a new task");
    utils.debug();
  });

  test("Submit new task", () => {
    fireEvent.change(inputTask, { target: { value: "new task" } });
    fireEvent.submit(form);
    expect(inputTask.textContent).toBe("");
  });

  test("Render visible list items", () => {
    render(<ToDoList />);
    fireEvent.change(inputTask, { target: { value: "Add new task in list" } });
    fireEvent.submit(form);
    expect(screen.getByTestId("list")).toBeInTheDocument();
    expect(
      screen.getByTestId("list", { name: "Add new task in list" })
    ).toBeInTheDocument();
  });
});
