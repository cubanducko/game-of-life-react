import { render, screen, userEvent } from "services/test-utils";
import { GameOfLifeControls } from "../GameOfLifeControls.component";

describe("GameOfLifeControls.component", () => {
  it("triggers the next generation handler when clicking on Next generation", () => {
    const onNextGeneration = jest.fn();
    render(
      <GameOfLifeControls
        onNextGeneration={onNextGeneration}
        onRandomFill={jest.fn}
        onClear={jest.fn}
      />
    );

    userEvent.click(screen.getByText("Next generation"));

    expect(onNextGeneration).toHaveBeenCalled();
  });

  it("triggers the clear handler when clicking on Reset", () => {
    const onClear = jest.fn();
    render(
      <GameOfLifeControls
        onNextGeneration={jest.fn}
        onRandomFill={jest.fn}
        onClear={onClear}
      />
    );

    userEvent.click(screen.getByText("Clear"));

    expect(onClear).toHaveBeenCalled();
  });

  it("triggers the random fill handler when clicking on Random fill", () => {
    const onRandomFill = jest.fn();
    render(
      <GameOfLifeControls
        onNextGeneration={jest.fn}
        onRandomFill={onRandomFill}
        onClear={jest.fn}
      />
    );

    userEvent.click(screen.getByText("Random fill"));

    expect(onRandomFill).toHaveBeenCalled();
  });
});
