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
    <ItemBoxContainer
      justifyContent={ContainerJustifyContent}
      alignItems={ContainerAlignItems}
    >
      <FlexItemBox />
      <FlexItemBox />
      <FlexItemBox />
    </ItemBoxContainer>
  );
}

// FlexItemBox를 담는 컨테이너
const ItemBoxContainer = styled.div`
  display: flex;
  justify-content: ${(props: StyleProps) => props.justifyContent};
  align-items: ${(props: StyleProps) => props.alignItems};
  border: 1px solid black;
  flex-wrap: wrap;
  width: 80%;
  height: 60%;
  padding: 5px;

  &:hover {
    border: 1px solid red;
    cursor: pointer;
  }
`;

export default FlexContainer;
