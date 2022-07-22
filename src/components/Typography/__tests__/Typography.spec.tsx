import { render } from "services/test-utils";
import { H1 } from "../H1.component";
import { H2 } from "../H2.component";

describe("Typography", () => {
  it("renders H1 correctly", () => {
    const { container } = render(<H1>Example title</H1>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders H2 correctly", () => {
    const { container } = render(<H2>Example subtitle</H2>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
