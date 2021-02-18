import React from 'react';
import styled from 'styled-components';

import FlexItem from 'components/FlexItem';
import useItemBoxJustifyContent from 'hooks/useItemBoxJustifyContent';
import useItemBoxAlignItems from 'hooks/useItemBoxAlignItems';

type StyleProps = {
  justifyContent: string;
  alignItems: string;
};

function FlexItemBox() {
  const { ItemBoxJustifyContent } = useItemBoxJustifyContent('normal');
  const { ItemBoxAlignItems } = useItemBoxAlignItems('normal');

  const onClickItemBox = (e: any) => {
    console.log('아이템 박스에 클릭');
  };

  return (
    <ItemContainer
      onClick={onClickItemBox}
      justifyContent={ItemBoxJustifyContent}
      alignItems={ItemBoxAlignItems}
      className="child"
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

  &:hover {
    background-color: #f5f6f2;
    border: 1px solid red;

    .parent {
      background-color: #e3e3e3;
    }
  }
`;

export default FlexItemBox;
