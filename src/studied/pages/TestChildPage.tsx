import React from 'react';

interface Props {
  onClickMethod: any;
}

function TestChildPage({ onClickMethod }: Props) {
  return <div onClick={onClickMethod}>나는 자식 컴포넌트야</div>;
}

export default TestChildPage;
