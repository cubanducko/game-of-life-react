import styled, { css } from "styled-components";

export type ButtonProps = {
  variant?: ButtonVariants;
};

export enum ButtonVariants {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export const Button = styled.button<ButtonProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.spacing(0.5)};
  font-weight: 700;
  height: ${({ theme }) => theme.spacing(5)};
  min-width: ${({ theme }) => theme.spacing(10)};
  cursor: pointer;

  ${({ variant = ButtonVariants.PRIMARY }) =>
    variant === ButtonVariants.PRIMARY
      ? primaryButtonStyles
      : secondaryButtonStyles};
`;

const primaryButtonStyles = css`
  border: 1px solid transparent;
  background: ${({ theme }) => theme.palette.primary.main};
  color: white;
  :hover,
  :active {
    background: ${({ theme }) => theme.palette.primary.accent};
  }
`;

const secondaryButtonStyles = css`
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  background: transparent;
  color: ${({ theme }) => theme.palette.primary.main};

  :hover,
  :active {
    background: ${({ theme }) => theme.palette.primary.accent};
    color: white;
  }
`;
