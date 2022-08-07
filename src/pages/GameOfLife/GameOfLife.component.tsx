import { H1, H2 } from "components";
import styled from "styled-components";
import { WithCommonProps } from "utils";
import { GameOfLifeControls, GameOfLifeGrid } from "./components/";
import { useGameOfLife } from "./GameOfLife.hooks";

type GameOfLifeProps = WithCommonProps;

const GRID_SIZE = 65;

export function GameOfLife({ ...props }: GameOfLifeProps): JSX.Element {
  const {
    grid,
    onNextGeneration,
    onCellClick,
    onClear,
    onStart,
    onPause,
    isRunning,
    onRandomFill,
  } = useGameOfLife(GRID_SIZE, 350);
  return (
    <GameOfLifeStyled {...props}>
      <Aside>
        <H1>Game of life</H1>
        <H2>A small demo of a simple game of life implementation in React</H2>

        <GameOfLifeControlsStyled
          onNextGeneration={onNextGeneration}
          onClear={onClear}
          onRandomFill={onRandomFill}
          onPause={onPause}
          onStart={onStart}
          isRunning={isRunning}
          data-testid="game-of-life-controls"
        />
      </Aside>
      <GameOfLifeGridStyled
        grid={grid}
        onCellClick={onCellClick}
        data-testid="game-of-life-grid"
        data-size={grid.length}
      />
    </GameOfLifeStyled>
  );
}

const GameOfLifeStyled = styled.main`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto;

  gap: ${({ theme }) => theme.spacing(5)};
  padding: ${({ theme }) => theme.spacing(2)};

  ${({ theme }) => theme.mediaQuery("tablet")} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    justify-items: center;
  }
`;

const Aside = styled.aside`
  align-self: center;

  ${({ theme }) => theme.mediaQuery("tablet")} {
    padding-bottom: ${({ theme }) => theme.spacing(5)};
  }
`;

const GameOfLifeControlsStyled = styled(GameOfLifeControls)`
  margin-top: ${({ theme }) => theme.spacing(2)};
`;

const GameOfLifeGridStyled = styled(GameOfLifeGrid)`
  width: 100%;

  ${({ theme }) => theme.mediaQuery("tablet")} {
    max-width: 80vh;
  }
`;
