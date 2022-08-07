export type GolGrid = GolCellState[][];

export type GolCellPosition = [number, number];

export enum GolCellState {
  DEAD = 0,
  ALIVE = 1,
}

export enum GolEdgeStrategies {
  ALIVE = "alive",
  DEAD = "dead",
}

export type GolCellData = {
  position: GolCellPosition;
  grid: GolGrid;
  edgeStrategy: GolEdgeStrategies;
};

// Naive implementation
// O(n^2) performance currently
export function computeNextGrid(
  grid: GolGrid,
  edgeStrategy = GolEdgeStrategies.DEAD
): GolGrid {
  const newGolGrid = buildGolGrid(grid.length);

  grid.forEach((row, y) => {
    row.forEach((_, x) => {
      newGolGrid[y][x] = computeNextCellState({
        position: [x, y],
        grid,
        edgeStrategy,
      });
    });
  });

  return newGolGrid;
}

// Rules of game of life
// https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Rules
export function computeNextCellState({
  grid,
  edgeStrategy,
  position,
}: GolCellData): GolCellState {
  const [x, y] = position;
  const neighborCount = computeCellNeighbors({
    position,
    grid,
    edgeStrategy,
  });

  if (isAlive(grid[y][x])) {
    if (neighborCount === 2 || neighborCount === 3) {
      return GolCellState.ALIVE;
    } else {
      return GolCellState.DEAD;
    }
  } else {
    if (neighborCount === 3) {
      return GolCellState.ALIVE;
    } else {
      return GolCellState.DEAD;
    }
  }
}

function computeCellNeighbors({
  grid,
  edgeStrategy,
  position,
}: GolCellData): number {
  const [x, y] = position;
  const edge = grid.length;
  return adjacentCells.reduce((neighborCount, pair) => {
    const xCoord = x + pair[0];
    const yCoord = y + pair[1];
    const isOutOfBounds =
      xCoord >= edge || xCoord < 0 || yCoord >= edge || yCoord < 0;

    if (isOutOfBounds) {
      switch (edgeStrategy) {
        case GolEdgeStrategies.ALIVE:
          return neighborCount + 1;
        case GolEdgeStrategies.DEAD:
        default:
          return neighborCount;
      }
    } else {
      return isAlive(grid[yCoord][xCoord]) ? neighborCount + 1 : neighborCount;
    }
  }, 0);
}

// This function purpose is to make to code more readable
function isAlive(cell: GolCellState) {
  return cell === GolCellState.ALIVE;
}

// This is a helper const to check neighbors
const adjacentCells = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [1, -1],
  [-1, 1],
  [0, -1],
  [1, 1],
  [-1, -1],
];

export function buildRandomGolGrid(size: number) {
  return buildGolGrid(size).map((row) =>
    row.map(() =>
      Math.round(Math.random()) ? GolCellState.DEAD : GolCellState.ALIVE
    )
  );
}

// Creating an empty grid with .fill is rather quick
export function buildGolGrid(size: number) {
  return Array(size)
    .fill(null)
    .map(() => Array(size).fill(GolCellState.DEAD));
}
