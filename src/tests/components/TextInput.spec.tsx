import { render, screen } from "@testing-library/react";
import { TextInput } from "../../components/textInput/index";
import { message } from "../../messages/index";

describe("TextInput Component", () => {
  it("renders correctly label", () => {
    render(<TextInput label={message("messages.userName")} />);

    expect(screen.getByText(message("messages.userName"))).toBeInTheDocument();
  });
});
