import { useCallback, useMemo, useState } from "react";
import {
  buildGolGrid,
  buildRandomGolGrid,
  computeNextGrid,
  GolCellPosition,
  GolCellState,
  GolGrid,
} from "./GameOfLife.logic";

export type GameOfLifeHandlers = {
  onNextGeneration: () => void;
  onClear: () => void;
  onRandomFill: () => void;
  onCellClick: (position: GolCellPosition) => void;
};

export type GameOfLifeData = {
  grid: GolGrid;
  generation: number;
};

export function useGameOfLife(
  gridSize: number
): GameOfLifeData & GameOfLifeHandlers {
  const [generation, setGeneration] = useState(0);
  const initialGrid = useMemo(() => buildGolGrid(gridSize), [gridSize]);
  const [grid, setGrid] = useState(initialGrid);

  const onNextGeneration = () => {
    const newGrid = computeNextGrid(grid);
    setGeneration(generation + 1);
    setGrid(newGrid);
  };

  const onClear = () => {
    const newGrid = buildGolGrid(gridSize);
    setGeneration(0);
    setGrid(newGrid);
  };

  const onRandomFill = () => {
    const newGrid = buildRandomGolGrid(gridSize);
    setGeneration(0);
    setGrid(newGrid);
  };

  // Needs to be memoized for performance reasons
  const onCellClick = useCallback((position: GolCellPosition) => {
    setGrid((previousGrid) => {
      const [x, y] = position;
      // This immutable update would be nicer with immer
      const newGrid = [...previousGrid];
      const updatedRow = [...previousGrid[y]];
      updatedRow[x] =
        previousGrid[y][x] === GolCellState.ALIVE
          ? GolCellState.DEAD
          : GolCellState.ALIVE;
      newGrid[y] = updatedRow;

      return newGrid;
    });
  }, []);

  return {
    grid,
    generation,
    onNextGeneration,
    onClear,
    onRandomFill,
    onCellClick,
  };
}
