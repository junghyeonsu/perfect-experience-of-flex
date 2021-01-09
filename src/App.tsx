import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';

const Container = styled.div`
  display: flex;
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <button type="button">현슈</button>
    </Container>
  );
}
export default App;
