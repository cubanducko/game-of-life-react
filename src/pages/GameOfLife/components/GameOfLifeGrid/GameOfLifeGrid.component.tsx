import styled from "styled-components";
import { WithCommonProps } from "utils";

import { GolGrid } from "../../GameOfLife.logic";
import { GameOfLifeHandlers } from "../../GameOfLife.hooks";
import { GameOfLifeRow } from "./components";

type GameOfLifeGridProps = WithCommonProps &
  Pick<GameOfLifeHandlers, "onCellClick"> & {
    grid: GolGrid;
  };

export function GameOfLifeGrid({
  grid,
  onCellClick,
  ...props
}: GameOfLifeGridProps): JSX.Element {
  return (
    <Grid size={grid.length} {...props}>
      {grid.map((row, y) => (
        <GameOfLifeRow
          key={`row-${y}`}
          y={y}
          row={row}
          onCellClick={onCellClick}
        />
      ))}
    </Grid>
  );
}

// Adding spacing with percentage is easier to resize
export const Grid = styled.section<{ size: number }>`
  display: grid;
  gap: 2px;
  padding: 2px;
  grid-template-rows: repeat(${({ size }) => size}, 1fr);

  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.spacing(0.5)};
  background-color: ${({ theme }) => theme.palette.typography.main};
`;
