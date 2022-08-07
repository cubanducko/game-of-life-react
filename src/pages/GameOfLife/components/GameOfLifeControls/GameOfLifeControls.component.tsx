import { Button, ButtonVariants } from "components";
import styled from "styled-components";
import { WithCommonProps } from "utils";

type GameOfLifeControlsProps = WithCommonProps & {
  onNextGeneration: () => void;
  onClear: () => void;
  onRandomFill: () => void;
};

export function GameOfLifeControls({
  onNextGeneration,
  onClear,
  onRandomFill,
  ...props
}: GameOfLifeControlsProps): JSX.Element {
  return (
    <ControlWrapper {...props}>
      <Button onClick={onNextGeneration}>Next generation</Button>
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
  grid-template-columns: auto auto auto;
`;
