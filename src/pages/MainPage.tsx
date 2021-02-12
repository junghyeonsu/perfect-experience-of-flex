import React from 'react';
import styled from 'styled-components';

import FlexContainer from 'components/FlexContainer';

function MainPage() {
  return (
    <Container>
      <FlexContainer />
    </Container>
  );
}

const Container = styled.div`
  margin: auto;
`;

export default MainPage;
