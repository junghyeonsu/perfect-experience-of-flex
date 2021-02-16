import React from 'react';
import styled from 'styled-components';
import useJustifyContent from 'hooks/useJustifyContent';

function JustifyContentForm() {
  // 초기값을 넣음
  const { onChange } = useJustifyContent('normal');

  const onChangeForm = (e: any) => {
    const str = String(e.target.value);
    onChange(str);
  };

  return (
    <Container>
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
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

export default JustifyContentForm;
