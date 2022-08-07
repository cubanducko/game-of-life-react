# 2. Game of life implementation

Date: 2022-07-22

## Context

Our stakeholder wants to implement the "Game of life" logic and implementation.
Performance doesn't seem to be a priority right now. Code simplicity, structure, and style are preferred.

## Decision

Since performance is not an issue and code simplicity, structure and style is a priority, we decided to implement Conway's game of life in pure React / HTML.
The internal data structure will be a simple `number[][]`

## Consequences

Implement Conway's game of life in pure React / HTML with a naive implementation

### A note on Game of life performance

Implementing Conway's game of life in pure React / HTML is highly inefficient. A naive implementation of Conway's game of life in React / HTML has a `O(n^2)` complexity (computing all cells all the time) + rendering times.

We could optimize this by computing in each iteration a `Set` of possible changes (cells that are adjacent to living cells) and only updating these on next iterations, but this optimization it's effective for more sparse grids.
Rendering times can also be optimized by preserving array references in non-changed rows.

If performance becomes an issue we should switch to a `canvas` and directly paint on it.

## Additional links

https://github.com/Bishibop/Fast-Game-of-Life
