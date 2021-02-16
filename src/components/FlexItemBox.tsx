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
  return (
    <>
      <p>아이템 박스</p>
      <Container
        justifyContent={ItemBoxJustifyContent}
        alignItems={ItemBoxAlignItems}
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
  width: 100%;
  height: 50px;
  border: 1px solid black;
  justify-content: ${(props: StyleProps) => props.justifyContent};
  align-items: ${(props: StyleProps) => props.alignItems};
`;

export default FlexItemBox;
