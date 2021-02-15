import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import MainPage from './pages/MainPage';
import TestPage from 'pages/TestPage';

function App() {
  return (
    <Container>
      <GlobalStyle />
      <MainPage />
      {/* <TestPage /> */}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export default App;
