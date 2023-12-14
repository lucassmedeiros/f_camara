import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "../../components/button/index";
import { message } from "../../messages/index";
import { ThemeProviderStyles } from "../index.tsx";

describe("Button Component", () => {
  it("renders with primary variant", () => {
    render(
      ThemeProviderStyles(
        <Button variant="primary">{message("messages.login")}</Button>
      )
    );

    expect(screen.getByText(message("messages.login"))).toBeInTheDocument();

    expect(screen.getByText(message("messages.login"))).not.toHaveStyle(
      "variant: outline"
    );
  });

  it("calls onClick handler", () => {
    const onClickMock = jest.fn();

    render(
      ThemeProviderStyles(
        <Button onClick={onClickMock}>{message("messages.login")}</Button>
      )
    );

    expect(screen.getByText(message("messages.login"))).toBeInTheDocument();

    fireEvent.click(screen.getByText(message("messages.login")));
    expect(onClickMock).toHaveBeenCalled();
  });
});
