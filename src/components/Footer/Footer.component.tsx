import styled from "styled-components";
import { WithCommonProps } from "utils";

type FooterProps = WithCommonProps;

export function Footer({ ...props }: FooterProps): JSX.Element {
  return (
    <StyledFooter {...props}>
      <Author>Ricardo Dominguez Alvarez</Author>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.palette.grey.main};
  background-color: ${({ theme }) => theme.palette.grey.light};
  padding: ${({ theme }) => theme.spacing(1, 2)};
`;

const Author = styled.span`
  font-weight: 300;
  font-size: ${({ theme }) => theme.spacing(1.5)};
`;
