import { render, screen, userEvent } from "services/test-utils";
import { GameOfLifeControls } from "../GameOfLifeControls.component";

describe("GameOfLifeControls.component", () => {
  const mockedProps = {
    onNextGeneration: jest.fn(),
    onRandomFill: jest.fn(),
    onClear: jest.fn(),
    onStart: jest.fn(),
    onPause: jest.fn(),
    isRunning: false,
  };

  it("triggers the start handler when clicking on Start", () => {
    const onStart = jest.fn();
    render(
      <GameOfLifeControls
        {...mockedProps}
        onStart={onStart}
        isRunning={false}
      />
    );

    userEvent.click(screen.getByText("Start"));

    expect(onStart).toHaveBeenCalled();
  });

  it("triggers the pause handler when game is running and clicking on Pause", () => {
    const onPause = jest.fn();
    render(<GameOfLifeControls {...mockedProps} onPause={onPause} isRunning />);

    userEvent.click(screen.getByText("Pause"));

    expect(onPause).toHaveBeenCalled();
  });

  it("triggers the next generation handler when clicking on Next", () => {
    const onNextGeneration = jest.fn();
    render(
      <GameOfLifeControls
        {...mockedProps}
        onNextGeneration={onNextGeneration}
      />
    );

    userEvent.click(screen.getByText("Next"));

    expect(onNextGeneration).toHaveBeenCalled();
  });

  it("triggers the clear handler when clicking on Reset", () => {
    const onClear = jest.fn();
    render(<GameOfLifeControls {...mockedProps} onClear={onClear} />);

    userEvent.click(screen.getByText("Clear"));

    expect(onClear).toHaveBeenCalled();
  });

  it("triggers the random fill handler when clicking on Random fill", () => {
    const onRandomFill = jest.fn();
    render(<GameOfLifeControls {...mockedProps} onRandomFill={onRandomFill} />);

    userEvent.click(screen.getByText("Random fill"));

    expect(onRandomFill).toHaveBeenCalled();
  });
});
