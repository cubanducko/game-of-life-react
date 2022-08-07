import React from "react";
import styled from "styled-components";
import { WithCommonProps } from "utils";
import { GolCellState } from "../../../GameOfLife.logic";
import { GameOfLifeHandlers } from "../../../GameOfLife.hooks";

type GameOfLifeCellProps = WithCommonProps &
  Pick<GameOfLifeHandlers, "onCellClick"> & {
    value: GolCellState;
    x: number;
    y: number;
  };

// We render this as a SVG rect to ensure it fits the screen correctly
// Memoizing gives a huge speed-up
export const GameOfLifeCell = React.memo(
  ({
    value,
    onCellClick,
    x,
    y,
    ...props
  }: GameOfLifeCellProps): JSX.Element => {
    return (
      <svg
        onClick={() => onCellClick([x, y])}
        data-testid={`cell-${x}-${y}`}
        data-state={value}
        viewBox="0 0 100 100"
        xmlns="http://www.xw3.org/2000/svg"
        {...props}
      >
        <Rect x="0" y="0" width="100%" height="100%" value={value} />
      </svg>
    );
  }
);

GameOfLifeCell.displayName = "GameOfLifeCell";

const Rect = styled.rect<{
  value: GolCellState;
}>`
  fill: ${({ value, theme }) =>
    value === GolCellState.ALIVE ? "white" : theme.palette.grey.dark};
  cursor: pointer;

  :hover {
    transition: fill 0.2s ease-in-out;
    fill: white;
  }
`;
