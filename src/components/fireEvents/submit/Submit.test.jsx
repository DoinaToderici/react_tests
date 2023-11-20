import { fireEvent, render, screen } from "@testing-library/react";
import Submit from "./Submit";

describe("Submit component test", () => {
  const setUp = () => {
    const utils = render(<Submit />);
    const form = utils.getByTestId("form");
    const textbox = utils.getByRole("textbox");
    const button = utils.getByRole("button");
    const paragraphe = utils.getByTestId("paragraphe");
    return { utils, form, textbox, button, paragraphe };
  };

  test("render node form, textbox, button, paragraphe", () => {
    const { form, textbox, button, paragraphe } = setUp();
    expect(form).toBeInTheDocument();
    expect(textbox).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(paragraphe).toBeInTheDocument();
  });

  test("submit form", () => {
    const { form, textbox, paragraphe } = setUp();
    fireEvent.change(textbox, { target: { value: "react" } });
    fireEvent.submit(form);
    expect(paragraphe.textContent).toBe("react");
  });

  test("reset values", () => {
    const { form, button, textbox, paragraphe } = setUp();
    fireEvent.change(textbox, { target: { value: "react" } });
    fireEvent.submit(form);
    expect(paragraphe.textContent).toBe("react");
    fireEvent.click(button);
    expect(paragraphe.textContent).toBe("");
    expect(textbox.value).toBe("");
  });
});
