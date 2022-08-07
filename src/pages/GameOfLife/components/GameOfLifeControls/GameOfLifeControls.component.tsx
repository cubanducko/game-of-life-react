import { Button, ButtonVariants } from "components";
import { GameOfLifeHandlers } from "../../GameOfLife.hooks";
import styled from "styled-components";
import { UseIntervalResult, WithCommonProps } from "utils";

type GameOfLifeControlsProps = WithCommonProps &
  Pick<GameOfLifeHandlers, "onNextGeneration" | "onClear" | "onRandomFill"> &
  UseIntervalResult;

export function GameOfLifeControls({
  onNextGeneration,
  onClear,
  onRandomFill,
  isRunning,
  onPause,
  onStart,
  ...props
}: GameOfLifeControlsProps): JSX.Element {
  return (
    <ControlWrapper {...props}>
      {isRunning ? (
        <Button onClick={onPause}>Pause</Button>
      ) : (
        <Button onClick={onStart}>Start</Button>
      )}
      <Button onClick={onNextGeneration} variant={ButtonVariants.SECONDARY}>
        Next
      </Button>
      <Button onClick={onRandomFill} variant={ButtonVariants.SECONDARY}>
        Random fill
      </Button>
      <Button onClick={onClear} variant={ButtonVariants.SECONDARY}>
        Clear
      </Button>
    </ControlWrapper>
  );
}

const ControlWrapper = styled.nav`
  display: grid;
  gap: ${({ theme }) => theme.spacing()};
  grid-template-columns: auto auto auto auto;
`;
