import { useCallback, useMemo, useState } from "react";
import { useInterval, UseIntervalResult } from "utils";
import {
  buildGolGrid,
  buildRandomGolGrid,
  computeNextGrid,
  GolCellPosition,
  GolCellState,
  GolGrid,
} from "./GameOfLife.logic";

export type UseGameOfLifeResult = GameOfLifeHandlers &
  GameOfLifeData &
  UseIntervalResult;

export type GameOfLifeHandlers = {
  onNextGeneration: () => void;
  onClear: () => void;
  onRandomFill: () => void;
  onCellClick: (position: GolCellPosition) => void;
};

export type GameOfLifeData = {
  grid: GolGrid;
  generation: number;
  isRunning: boolean;
};

export function useGameOfLife(gridSize: number, ms = 350): UseGameOfLifeResult {
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

  const { isRunning, onStart, onPause } = useInterval(onNextGeneration, ms);

  return {
    grid,
    generation,
    isRunning,
    onStart,
    onPause,
    onNextGeneration,
    onClear,
    onRandomFill,
    onCellClick,
  };
}
