import React from 'react';
import styled from 'styled-components';
import useAlignItems from 'hooks/useAlignItems';

function AlignItemsForm() {
  // 초기값을 넣음
  const { onChange } = useAlignItems('normal');

  const onChangeForm = (e: any) => {
    const str = String(e.target.value);
    onChange(str);
  };

  return (
    <Container>
      <h1>align-items</h1>
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

export default AlignItemsForm;
