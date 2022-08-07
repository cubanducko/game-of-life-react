import { computeNextGrid, GolCellState } from "../GameOfLife.logic";

describe("GameOfLife.logic", () => {
  describe("Game of life rules", () => {
    // Examples extracted from: https://playgameoflife.com/info
    it("kills live cells with fewer than two alive neighbors", () => {
      const golGrid = [
        [GolCellState.ALIVE, GolCellState.DEAD, GolCellState.DEAD],
        [GolCellState.DEAD, GolCellState.ALIVE, GolCellState.DEAD],
        [GolCellState.DEAD, GolCellState.DEAD, GolCellState.DEAD],
      ];

      const nextGrid = computeNextGrid(golGrid);

      expect(nextGrid[0][0]).toBe(GolCellState.DEAD);
      expect(nextGrid[1][1]).toBe(GolCellState.DEAD);
    });

    it("keeps alive cells with two or three alive neighbors", () => {
      const golGrid = [
        [GolCellState.ALIVE, GolCellState.DEAD, GolCellState.DEAD],
        [GolCellState.DEAD, GolCellState.ALIVE, GolCellState.DEAD],
        [GolCellState.DEAD, GolCellState.ALIVE, GolCellState.DEAD],
      ];

      const nextGrid = computeNextGrid(golGrid);

      expect(nextGrid[0][0]).toBe(GolCellState.DEAD);
      expect(nextGrid[2][1]).toBe(GolCellState.DEAD);

      expect(nextGrid[1][1]).toBe(GolCellState.ALIVE);
    });

    it("kills live cells with more than three alive neighbors", () => {
      const golGrid = [
        [GolCellState.ALIVE, GolCellState.DEAD, GolCellState.ALIVE],
        [GolCellState.ALIVE, GolCellState.ALIVE, GolCellState.DEAD],
        [GolCellState.DEAD, GolCellState.ALIVE, GolCellState.ALIVE],
      ];

      const nextGrid = computeNextGrid(golGrid);

      expect(nextGrid[0][0]).toBe(GolCellState.ALIVE);
      expect(nextGrid[1][0]).toBe(GolCellState.ALIVE);
      expect(nextGrid[2][0]).toBe(GolCellState.ALIVE);
      expect(nextGrid[2][1]).toBe(GolCellState.ALIVE);
      expect(nextGrid[2][2]).toBe(GolCellState.ALIVE);

      expect(nextGrid[1][1]).toBe(GolCellState.DEAD);
      expect(nextGrid[0][2]).toBe(GolCellState.DEAD);
    });

    it("births new cells if a dead cell has more than three alive neighbors", () => {
      const golGrid = [
        [GolCellState.ALIVE, GolCellState.DEAD, GolCellState.DEAD],
        [GolCellState.ALIVE, GolCellState.DEAD, GolCellState.DEAD],
        [GolCellState.DEAD, GolCellState.DEAD, GolCellState.ALIVE],
      ];

      const nextGrid = computeNextGrid(golGrid);

      expect(nextGrid[1][1]).toBe(GolCellState.ALIVE);

      expect(nextGrid[0][0]).toBe(GolCellState.DEAD);
      expect(nextGrid[1][0]).toBe(GolCellState.DEAD);
      expect(nextGrid[2][2]).toBe(GolCellState.DEAD);
    });
  });

  describe("Edge strategies", () => {
    it("plays the game assuming the borders are alive", () => {});
    it("plays the game assuming the borders are dead", () => {});
  });
});
