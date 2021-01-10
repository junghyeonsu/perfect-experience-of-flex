import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import MainPage from './pages/MainPage';

function App() {
  return (
    <Container>
      <GlobalStyle />
      <MainPage />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export default App;
