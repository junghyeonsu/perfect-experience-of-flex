import React from 'react';
import styled from 'styled-components';

import FlexItemBox from 'components/FlexItemBox';
import useContainerJustifyContent from 'hooks/useContainerJustifyContent';
import useContainerAlignItems from 'hooks/useContainerAlignItems';

type StyleProps = {
  justifyContent: string;
  alignItems: string;
};

function FlexContainer() {
  const { ContainerJustifyContent } = useContainerJustifyContent('normal');
  const { ContainerAlignItems } = useContainerAlignItems('normal');

  return (
    <Container>
      <p>컨테이너</p>
      <ItemBoxContainer
        justifyContent={ContainerJustifyContent}
        alignItems={ContainerAlignItems}
      >
        <FlexItemBox />
        <FlexItemBox />
        <FlexItemBox />
      </ItemBoxContainer>
    </Container>
  );
}

const ItemBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props: StyleProps) => props.justifyContent};
  align-items: ${(props: StyleProps) => props.alignItems};
  border: 1px solid black;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 50%;
`;

export default FlexContainer;
