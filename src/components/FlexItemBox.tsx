import React from 'react';
import styled from 'styled-components';

import FlexItem from 'components/FlexItem';
import useItemBoxJustifyContent from 'hooks/useItemBoxJustifyContent';
import useItemBoxAlignItems from 'hooks/useItemBoxAlignItems';
import useCliker from 'hooks/useCliker';

type StyleProps = {
  justifyContent: string;
  alignItems: string;
};

function FlexItemBox() {
  const { ItemBoxJustifyContent } = useItemBoxJustifyContent('normal');
  const { ItemBoxAlignItems } = useItemBoxAlignItems('normal');
  const { ClickItemBox, ClikerStates } = useCliker();

  const onClickItemBox = () => {
    console.log('아이템 박스 클릭');
    ClickItemBox();
  };

  return (
    <ItemContainer
      onClickCapture={onClickItemBox}
      justifyContent={ItemBoxJustifyContent}
      alignItems={ItemBoxAlignItems}
    >
      <FlexItem />
      <FlexItem />
      <FlexItem />
    </ItemContainer>
  );
}

// item 들을 담을 박스
const ItemContainer = styled.div`
  display: flex;
  width: 200px;
  height: 50px;
  border: 1px solid black;
  justify-content: ${(props: StyleProps) => props.justifyContent};
  align-items: ${(props: StyleProps) => props.alignItems};
  position: relative;
  z-index: 10;

  &:hover {
    border: 1px solid red;
    cursor: pointer;
  }
`;

export default FlexItemBox;
