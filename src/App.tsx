import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import MainPage from './pages/MainPage';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './modules';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <Container>
        <GlobalStyle />
        <MainPage />
      </Container>
    </Provider>
  );
}

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export default App;
