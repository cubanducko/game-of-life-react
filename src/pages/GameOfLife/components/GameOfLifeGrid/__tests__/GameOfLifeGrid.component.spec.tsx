import { render, screen } from "services/test-utils";
import { GolCellState } from "../../../GameOfLife.logic";
import { GameOfLifeGrid } from "../GameOfLifeGrid.component";

describe("GameOfLifeGrid", () => {
  const golGrid = [
    [GolCellState.ALIVE, GolCellState.DEAD],
    [GolCellState.DEAD, GolCellState.ALIVE],
  ];

  it("renders a game of life grid correctly", () => {
    render(<GameOfLifeGrid grid={golGrid} onCellClick={jest.fn} />);

    expect(screen.getByTestId("cell-0-0")).toHaveAttribute(
      "data-state",
      `${GolCellState.ALIVE}`
    );
    expect(screen.getByTestId("cell-0-1")).toHaveAttribute(
      "data-state",
      `${GolCellState.DEAD}`
    );
    expect(screen.getByTestId("cell-1-0")).toHaveAttribute(
      "data-state",
      `${GolCellState.DEAD}`
    );
    expect(screen.getByTestId("cell-1-1")).toHaveAttribute(
      "data-state",
      `${GolCellState.ALIVE}`
    );
  });
});
