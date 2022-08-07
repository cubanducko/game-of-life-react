import { GolCellState } from "pages/GameOfLife/GameOfLife.logic";
import { defaultTheme } from "services/styling";
import { render, screen, userEvent } from "services/test-utils";
import { GameOfLifeCell } from "../GameOfLifeCell.component";

describe("GameOfLifeCell", () => {
  it("renders white when alive", () => {
    render(
      <GameOfLifeCell
        x={0}
        y={0}
        value={GolCellState.ALIVE}
        onCellClick={jest.fn}
      />
    );
    const mainComponent = screen.getByTestId("cell-0-0");

    expect(mainComponent).toBeInTheDocument();
    expect(mainComponent).toHaveAttribute(
      "data-state",
      `${GolCellState.ALIVE}`
    );
    expect(mainComponent.querySelector("rect")).toHaveStyleRule(
      "fill",
      "white"
    );
  });

  it("renders grey when dead", () => {
    render(
      <GameOfLifeCell
        x={0}
        y={0}
        value={GolCellState.DEAD}
        onCellClick={jest.fn}
      />
    );
    const mainComponent = screen.getByTestId("cell-0-0");

    expect(mainComponent).toBeInTheDocument();
    expect(mainComponent).toHaveAttribute("data-state", `${GolCellState.DEAD}`);
    expect(mainComponent.querySelector("rect")).toHaveStyleRule(
      "fill",
      defaultTheme.palette.grey.dark
    );
  });

  it("triggers the onClick handler when clicking in the cell", () => {
    const onCellClick = jest.fn();
    render(
      <GameOfLifeCell
        x={0}
        y={0}
        value={GolCellState.DEAD}
        onCellClick={onCellClick}
      />
    );
    userEvent.click(screen.getByTestId("cell-0-0"));

    expect(onCellClick).toHaveBeenCalledWith([0, 0]);
  });
});
