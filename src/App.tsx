import React from 'react';
import styled from 'styled-components';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './modules';

import GlobalStyle from './styles/GlobalStyle';
import MainPage from './pages/MainPage';

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

const Container = styled.div``;

export default App;
