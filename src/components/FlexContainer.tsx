import React from 'react';
import styled from 'styled-components';
import FlexItem from 'components/FlexItem';
// import CSSImage from 'images/css.jpg';

function FlexContainer() {
  return (
    <>
      <p>컨테이너</p>
      {/* <Image src={CSSImage} alt="이미지1" /> */}
      <Container>
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
  border: 1px solid black;
  width: 50vw;
  height: 50vh;
`;

// const Image = styled.img`
//   width: 100%;
//   object-fit: cover;
// `;

export default FlexContainer;
