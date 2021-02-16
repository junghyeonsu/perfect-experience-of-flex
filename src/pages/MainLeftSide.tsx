import React from 'react';
import styled from 'styled-components';

import FlexContainer from 'components/FlexContainer';
import ContainerJustifyContentForm from 'components/ContainerJustifyContentForm';
import ContainerAlignItemsForm from 'components/ContainerAlignItemsForm';
import ItemBoxJustifyContentForm from 'components/ItemBoxJustifyContentForm';
import ItemBoxAlignItemsForm from 'components/ItemBoxAlignItemsForm';

function MainLeftSide() {
  return (
    <Container>
      <FlexContainer />
      <ContainerJustifyContentForm />
      <ContainerAlignItemsForm />
      <ItemBoxJustifyContentForm />
      <ItemBoxAlignItemsForm />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export default MainLeftSide;
