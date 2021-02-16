import React from 'react';
import styled from 'styled-components';
import FlexItem from 'components/FlexItem';
import useContainerJustifyContent from 'hooks/useContainerAlignItemsJustifyContent';
import useContainerAlignItems from 'hooks/useContainerAlignItemsAlignItems';

type StyleProps = {
  justifyContent: string;
  alignItems: string;
};

function FlexContainer() {
  const { ContainerJustifyContent } = useContainerJustifyContent('normal');
  const { ContainerAlignItems } = useContainerAlignItems('normal');

  return (
    <>
      <p>컨테이너</p>
      <Container
        justifyContent={ContainerJustifyContent}
        alignItems={ContainerAlignItems}
      >
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
  justify-content: ${(props: StyleProps) => props.justifyContent};
  align-items: ${(props: StyleProps) => props.alignItems};
  border: 1px solid black;
  width: 50vw;
  height: 50vh;
`;

export default FlexContainer;
