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
    <>
      <p>컨테이너</p>
      <Container
        justifyContent={ContainerJustifyContent}
        alignItems={ContainerAlignItems}
      >
        <FlexItemBox />
        <FlexItemBox />
        <FlexItemBox />
        <FlexItemBox />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props: StyleProps) => props.justifyContent};
  align-items: ${(props: StyleProps) => props.alignItems};
  border: 1px solid black;
  width: 50vw;
  height: 50vh;
`;

export default FlexContainer;
