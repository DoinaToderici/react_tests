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
  test.skip("Render HTML Elements", () => {
    const { inputTask, submitItemBtn, form } = setUp();

    expect(form).toBeInTheDocument();
    expect(inputTask).toBeInTheDocument();
    expect(submitItemBtn).toBeInTheDocument();
  });

  test.skip("Test writing a new task", () => {
    const { inputTask } = setUp();

    fireEvent.change(inputTask, { target: { value: "This is a new task" } });
    expect(inputTask.value).toBe("This is a new task");
    utils.debug();
  });

  test.skip("Submit new task", () => {
    const { inputTask, form } = setUp();

    fireEvent.change(inputTask, { target: { value: "new task" } });
    fireEvent.submit(form);
    expect(inputTask.textContent).toBe("");
  });

  test.skip("Render visible list items", () => {
    render(<ToDoList />);
    fireEvent.change(inputTask, { target: { value: "Add new task in list" } });
    fireEvent.submit(form);
    expect(screen.getByTestId("list")).toBeInTheDocument();
    expect(
      screen.getByTestId("list", { name: "Add new task in list" })
    ).toBeInTheDocument();
  });

  test.skip("Click to a item from list", () => {
    render(<ToDoList />);

    const input = screen.getByRole("textbox", {
      target: { name: "taskInput" },
    });
    const btnSubmit = screen.getByRole("button", { name: "Add in list" });

    fireEvent.change(input, { target: { value: "Add new task in list" } });
    expect(input).toHaveValue("Add new task in list");
    fireEvent.click(btnSubmit);
    expect(input).toHaveValue("");
    expect(
      screen.getByTestId("textItem", { name: "Add new task in list" })
    ).toBeVisible();
    fireEvent.click(
      screen.getByTestId("textItem", { name: "Add new task in list" })
    );
    expect(
      screen.getByTestId("textItem", { name: "Add new task in list" })
    ).toHaveClass("line-through");
  });

  test.skip("Delete item from list", () => {
    render(<ToDoList />);

    const input = screen.getByRole("textbox", {
      target: { name: "taskInput" },
    });

    fireEvent.change(input, { target: { value: "Add new task in list" } });
    expect(input).toHaveValue("Add new task in list");
    expect(
      screen.getByRole("button", {
        target: { title: "deleteBtn" },
      })
    ).toBeInTheDocument();

    fireEvent.click(
      screen.getByRole("button", {
        target: { title: "deleteBtn" },
      })
    );

    waitForElementToBeRemoved(() => expect(screen.getByRole("listitem")));
  });

  test("Modify item from list", async () => {
    render(<ToDoList />);

    // Add a todo
    const input = screen.getByPlaceholderText("Tap your task here");

    expect(input).toBeVisible();

    fireEvent.change(input, {
      target: { value: "Add new task in list for modify" },
    });

    expect(input.value).toBe("Add new task in list for modify");

    fireEvent.click(
      screen.getByRole("button", {
        name: /add in list/i,
      })
    );

    // Verify that todo exist
    expect(screen.getByText(/add new task in list for modify/i)).toBeVisible();
    expect(
      screen.getByRole("button", {
        name: /deletebtn/i,
      })
    ).toBeVisible();
    expect(
      screen.getByRole("button", {
        name: /modifybtn/i,
      })
    ).toBeVisible();

    // Modify todo
    fireEvent.click(
      screen.getByRole("button", {
        name: /modifybtn/i,
      })
    );
    const updateInput = screen.getByDisplayValue(
      "Add new task in list for modify"
    );
    expect(updateInput).toBeVisible();
    expect(
      screen.getByRole("button", {
        name: /updatesubmitbtn/i,
      })
    ).toBeVisible();

    //change value todo
    fireEvent.change(updateInput, {
      target: { value: "This is the changed value task" },
    });
    expect(updateInput.value).toBe("This is the changed value task");

    //submit changed value todo :
    fireEvent.click(
      screen.getByRole("button", {
        name: /updatesubmitbtn/i,
      })
    );

    expect(screen.getByText("This is the changed value task")).toBeVisible();
  });

  test("Clear button", () => {
    render(<ToDoList />);

    const input = screen.getByPlaceholderText("Tap your task here");
    fireEvent.change(input, {
      target: { value: "Task for test clear btn" },
    });
    expect(input.value).toBe("Task for test clear btn");

    fireEvent.click(
      screen.getByRole("button", {
        name: /add in list/i,
      })
    );

    expect(screen.getByText(/task for test clear btn/i)).toBeVisible();
    const clearBtn = screen.getByRole("button", {
      name: /clear all/i,
    });
    expect(clearBtn).toBeVisible();
    fireEvent.click(clearBtn);
    waitForElementToBeRemoved(() => expect(screen.getByRole("list")));

    screen.logTestingPlaygroundURL();
  });
});
