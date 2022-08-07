import { WithCommonProps } from "utils";
import { GameOfLifeCell } from "./GameOfLifeCell.component";
import { GolCellState } from "../../../GameOfLife.logic";
import { GameOfLifeHandlers } from "../../../GameOfLife.hooks";

import styled from "styled-components";

type GameOfLifeRowProps = WithCommonProps &
  Pick<GameOfLifeHandlers, "onCellClick"> & {
    row: GolCellState[];
    y: number;
  };

// Naive implementation
// Memoizing this component paired with a partial update of the root grid could lead to some performance benefits in sparse grids
export function GameOfLifeRow({
  row,
  y,
  onCellClick,
  ...props
}: GameOfLifeRowProps): JSX.Element {
  return (
    <Row size={row.length} {...props}>
      {row.map((cell, x) => (
        <GameOfLifeCell
          key={`cell-${x}-${y}`}
          x={x}
          y={y}
          value={cell}
          onCellClick={onCellClick}
        />
      ))}
    </Row>
  );
}

export const Row = styled.div<{ size: number }>`
  display: grid;
  gap: 2px;
  grid-template-columns: repeat(${({ size }) => size}, 1fr);
`;
