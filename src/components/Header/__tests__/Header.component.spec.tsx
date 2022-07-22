import { render, screen } from "services/test-utils";
import { Header } from "../Header.component";

describe("Header.component", () => {
  it("renders correctly", () => {
    render(<Header />);

    expect(screen.getByRole("img", { name: "brand-logo" })).toBeInTheDocument();
    expect(screen.getByText("Game of life Playground")).toBeInTheDocument();
  });
});
