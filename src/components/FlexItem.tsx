import React from 'react';
import styled from 'styled-components';

function FlexItem() {
  return <Container>아이템</Container>;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 10%;
  border: 1px solid black;
`;

export default FlexItem;
