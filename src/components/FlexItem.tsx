import React from 'react';
import styled from 'styled-components';

function FlexItem() {
  return <Container>아이템</Container>;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 30px;
  border: 1px solid black;
`;

export default FlexItem;
