import React from 'react';
import styled from 'styled-components';
import FlexItem from 'components/FlexItem';

function FlexContainer() {
  return (
    <>
      <p>컨테이너</p>
      <Container>
        <FlexItem />
        <FlexItem />
        <FlexItem />
        <FlexItem />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  border: 1px solid black;
  width: 50vw;
  height: 50vh;
`;

export default FlexContainer;
