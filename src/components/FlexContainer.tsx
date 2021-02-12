import React from 'react';
import styled from 'styled-components';

function FlexContainer() {
  return <Container>컨테이너</Container>;
}

const Container = styled.div`
  display: flex;
  border: 1px solid black;
  width: 50vw;
  height: 50vh;
`;

export default FlexContainer;
