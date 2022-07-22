import { render, screen } from "services/test-utils";
import { Footer } from "../Footer.component";

describe("Header.component", () => {
  it("renders correctly", () => {
    render(<Footer />);

    expect(screen.getByText("Ricardo Dominguez Alvarez")).toBeInTheDocument();
  });
});
