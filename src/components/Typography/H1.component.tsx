import styled from "styled-components";

export const H1 = styled.h1`
  font-size: ${({ theme }) => theme.spacing(8)};
  line-height: ${({ theme }) => theme.spacing(10)};
  font-weight: 700;
  margin: 0;
`;
