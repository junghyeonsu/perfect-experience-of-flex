import React from 'react';
import styled from 'styled-components';
import useItemBoxAlignItems from 'hooks/useItemBoxAlignItems';

function ItemBoxAlignItemsForm() {
  const { onChange } = useItemBoxAlignItems('normal');

  const onChangeForm = (e: any) => {
    const str = String(e.target.value);
    onChange(str);
  };

  return (
    <Container>
      <h1>아이템 박스 align-items</h1>
      <form onChange={onChangeForm}>
        <label>
          <input name="alignItems" type="radio" value="normal" defaultChecked />
          normal
        </label>
        <label>
          <input name="alignItems" type="radio" value="center" />
          center
        </label>
        <label>
          <input name="alignItems" type="radio" value="start" />
          start
        </label>
        <label>
          <input name="alignItems" type="radio" value="space-evenly" />
          space-evenly
        </label>
      </form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

export default ItemBoxAlignItemsForm;
