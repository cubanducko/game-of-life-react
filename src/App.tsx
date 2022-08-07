import { Header, Footer } from "components";
import { GameOfLife } from "pages/GameOfLife";
import styled from "styled-components";

export function App() {
  return (
    <StyledApp>
      <Header data-testid="app-header" />
      <GameOfLife data-testid="app-game" />
      <Footer />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  display: grid;
  grid-template-rows: min-content auto min-content;
  align-items: center;
  min-height: 100vh;
`;
