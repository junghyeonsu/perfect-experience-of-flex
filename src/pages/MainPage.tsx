import React from 'react';
import styled from 'styled-components';

import FlexContainer from 'components/FlexContainer';
import JustifyContentForm from 'components/JustifyContentForm';
import AlignItemsForm from 'components/AlignItemsForm';

function MainPage() {
  return (
    <Container>
      <FlexContainer />
      <JustifyContentForm />
      <AlignItemsForm />
    </Container>
  );
}

const Container = styled.div`
  margin: auto;
`;

export default MainPage;
