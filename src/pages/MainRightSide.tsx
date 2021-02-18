import React from 'react';
import styled from 'styled-components';

import useCliker from 'hooks/useCliker';

function MainRightSide() {
  const { ClikerStates } = useCliker();

  return (
    <Container>
      {ClikerStates.container ? <div>container</div> : ''}
      {ClikerStates.itembox ? <div>item box</div> : ''}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

export default MainRightSide;
