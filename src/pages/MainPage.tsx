import React from 'react';
import styled from 'styled-components';

import FlexContainer from 'components/FlexContainer';
import ContainerJustifyContentForm from 'components/ContainerJustifyContentForm';
import ContainerAlignItemsForm from 'components/ContainerAlignItemsForm';
import ItemBoxJustifyContentForm from 'components/ItemBoxJustifyContentForm';
import ItemBoxAlignItemsForm from 'components/ItemBoxAlignItemsForm';

function MainPage() {
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
  margin: auto;
`;

export default MainPage;
