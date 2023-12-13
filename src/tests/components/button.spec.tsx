import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "../../components/button/index";
import { ThemeProviderStyles } from "../index.tsx";

describe("Button Component", () => {
  it("renders with primary variant", () => {
    render(ThemeProviderStyles(<Button variant="primary">Entrar</Button>));

    expect(screen.getByText("Entrar")).toBeInTheDocument();

    // expect(screen.getByText("Entrar")).toHaveStyle("");
  });

  it("calls onClick handler", () => {
    const onClickMock = jest.fn();

    render(
      ThemeProviderStyles(<Button onClick={onClickMock}>Click me</Button>)
    );

    expect(screen.getByText("Click me")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Click me"));
    expect(onClickMock).toHaveBeenCalled();
  });
});
