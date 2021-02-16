import React from 'react';
import styled from 'styled-components';
import useItemBoxJustifyContent from 'hooks/useItemBoxJustifyContent';

function ItemBoxJustifyContentForm() {
  // 초기값을 넣음
  const { onChange } = useItemBoxJustifyContent('normal');

  const onChangeForm = (e: any) => {
    const str = String(e.target.value);
    onChange(str);
  };

  return (
    <Container>
      <h1>아이템 박스 justify-content</h1>
      <form onChange={onChangeForm}>
        <label>
          <input
            name="justifyContent"
            type="radio"
            value="normal"
            defaultChecked
          />
          normal
        </label>
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
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

export default ItemBoxJustifyContentForm;
