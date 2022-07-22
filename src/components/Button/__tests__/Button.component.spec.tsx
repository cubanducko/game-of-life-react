import { render } from "services/test-utils";
import { Button, ButtonVariants } from "../Button.component";

describe("Button.component", () => {
  it("renders correctly the primary variant", () => {
    const { container } = render(<Button>Example button</Button>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders correctly the secondary variant", () => {
    const { container } = render(
      <Button variant={ButtonVariants.SECONDARY}>Example button</Button>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
