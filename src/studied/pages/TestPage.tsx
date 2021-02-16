import React from 'react';
import TestChildPage from 'studied/pages/TestChildPage';

function TestPage() {
  const onClickDiv = (e: any) => {
    console.log(e);
  };

  return (
    <>
      <div>
        <TestChildPage onClickMethod={onClickDiv} />
        <div style={{ color: 'red' }}>빨강쓰</div>
      </div>
    </>
  );
}

export default TestPage;
