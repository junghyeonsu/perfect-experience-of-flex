import React from 'react';
import styled from 'styled-components';

import FlexItemBox from 'components/FlexItemBox';
import useContainerJustifyContent from 'hooks/useContainerJustifyContent';
import useContainerAlignItems from 'hooks/useContainerAlignItems';
import useCliker from 'hooks/useCliker';

type StyleProps = {
  justifyContent: string;
  alignItems: string;
};

function FlexContainer() {
  const { ContainerJustifyContent } = useContainerJustifyContent('normal');
  const { ContainerAlignItems } = useContainerAlignItems('normal');
  const { ClickContainer } = useCliker();

  const onClickContainer = () => {
    console.log('컨테이너 클릭');
    ClickContainer();
  };

  return (
    <ItemBoxContainer
      justifyContent={ContainerJustifyContent}
      alignItems={ContainerAlignItems}
      onClickCapture={onClickContainer}
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
  position: relative;
  z-index: 5;

  &:hover {
    border: 1px solid red;
    cursor: pointer;
  }
`;

export default FlexContainer;
