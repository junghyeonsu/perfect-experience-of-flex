import React from 'react';
import styled from 'styled-components';
import FlexItem from 'components/FlexItem';
// import CSSImage from 'images/css.jpg';
import useJustifyContent from 'hooks/useJustifyContent';

type StyleProps = {
  justifyContent: string;
};

function FlexContainer() {
  const { justifyContent, onChange } = useJustifyContent('normal');
  const onChangeForm = (e: any) => {
    const str = String(e.target.value);
    onChange(str);
  };

  return (
    <>
      <p>컨테이너</p>
      {/* <Image src={CSSImage} alt="이미지1" /> */}
      <Container justifyContent={justifyContent}>
        <FlexItem />
        <FlexItem />
        <FlexItem />
        <FlexItem />
      </Container>
      <form onChange={onChangeForm}>
        <label>
          <input name="justifyContent" type="radio" value="center" />
          center
        </label>
        <label>
          <input name="justifyContent" type="radio" value="start" />
          start
        </label>
        <label>
          <input name="justifyContent" type="radio" value="space-evenly" />
          space-evenly
        </label>
      </form>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: ${(props: StyleProps) => props.justifyContent};
  border: 1px solid black;
  width: 50vw;
  height: 50vh;
`;

// const Image = styled.img`
//   width: 100%;
//   object-fit: cover;
// `;

export default FlexContainer;
