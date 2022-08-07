import { render, screen, userEvent } from "services/test-utils";
import { GameOfLife } from "../GameOfLife.component";
import { GolCellState } from "../GameOfLife.logic";

describe("GameOfLife.spec", () => {
  it("renders correctly", () => {
    render(<GameOfLife />);

    expect(screen.getByText("Game of life")).toBeInTheDocument();
    expect(
      screen.getByText(
        "A small demo of a simple game of life implementation in React"
      )
    ).toBeInTheDocument();
    expect(screen.getByTestId("game-of-life-controls")).toBeInTheDocument();
    expect(screen.getByTestId("game-of-life-grid")).toBeInTheDocument();
  });

  it("renders a 65x65 life grid", () => {
    render(<GameOfLife />);

    expect(screen.getByTestId("game-of-life-grid")).toHaveAttribute(
      "data-size",
      "65"
    );
  });

  it("advances one generation when clicking on Next Generation button", () => {
    render(<GameOfLife />);

    // Paint a small figure
    userEvent.click(screen.getByTestId("cell-0-0"));
    userEvent.click(screen.getByTestId("cell-0-1"));
    userEvent.click(screen.getByTestId("cell-1-0"));

    // Advance generation
    userEvent.click(screen.getByText("Next generation"));

    expect(screen.getByTestId("cell-1-1")).toHaveAttribute(
      "data-state",
      `${GolCellState.ALIVE}`
    );
  });

  it("reset the grid when clicking on Clear button", () => {
    render(<GameOfLife />);

    // Paint a small figure
    userEvent.click(screen.getByTestId("cell-0-0"));
    userEvent.click(screen.getByTestId("cell-0-1"));
    userEvent.click(screen.getByTestId("cell-1-0"));

    // Clear grid generation
    userEvent.click(screen.getByText("Clear"));

    expect(screen.getByTestId("cell-0-0")).toHaveAttribute(
      "data-state",
      `${GolCellState.DEAD}`
    );
    expect(screen.getByTestId("cell-0-1")).toHaveAttribute(
      "data-state",
      `${GolCellState.DEAD}`
    );
    expect(screen.getByTestId("cell-1-0")).toHaveAttribute(
      "data-state",
      `${GolCellState.DEAD}`
    );
  });

  it("fills the grid with random data when clicking on Random fill", () => {
    const { container } = render(<GameOfLife />);

    // Clear grid generation
    userEvent.click(screen.getByText("Random fill"));

    // Quickest way to tests randomness
    // eslint-disable-next-line testing-library/no-container
    const aliveCells = container.querySelectorAll(
      `[data-state="${GolCellState.ALIVE}"]`
    ).length;

    expect(aliveCells).toBeGreaterThan(0);
  });
});
