import React from 'react';
import styled from 'styled-components';
import FlexItem from 'components/FlexItem';
import useJustifyContent from 'hooks/useJustifyContent';
import useAlignItems from 'hooks/useAlignItems';

type StyleProps = {
  justifyContent: string;
  alignItems: string;
};

function FlexContainer() {
  const { justifyContent } = useJustifyContent('normal');
  const { alignItems } = useAlignItems('normal');

  return (
    <>
      <p>컨테이너</p>
      <Container justifyContent={justifyContent} alignItems={alignItems}>
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
