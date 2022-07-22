import { useBrand } from "services/brands";
import styled from "styled-components";
import { WithCommonProps } from "utils";

type HeaderProps = WithCommonProps;

export function Header({ ...props }: HeaderProps): JSX.Element {
  const {
    assets: { logo },
  } = useBrand();
  return (
    <StyledHeader {...props}>
      <Logo alt="brand-logo" src={logo} />
      <Title>Game of life Playground</Title>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.palette.grey.main};
  padding: ${({ theme }) => theme.spacing(1, 2)};
`;

const Logo = styled.img`
  height: ${({ theme }) => theme.spacing(5)};
`;

const Title = styled.span`
  font-weight: 600;
`;
