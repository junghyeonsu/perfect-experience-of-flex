import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import MainLeftSide from 'pages/MainLeftSide';
import MainRightSide from 'pages/MainRightSide';

function MainPage() {
  const isWide = useMediaQuery({
    query: '(min-width:1024px)',
  });

  return (
    <Container>
      <MainLeftSide />
      {isWide ? <MainRightSide /> : ''}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export default MainPage;
