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

  return { inputTask, submitItemBtn, form, ...utils };
};

describe("ToDoList Tests", () => {
  const { inputTask, submitItemBtn, form } = setUp();

  test("Render HTML Elements", () => {
    expect(form).toBeInTheDocument();
    expect(inputTask).toBeInTheDocument();
    expect(submitItemBtn).toBeInTheDocument();
  });
});
