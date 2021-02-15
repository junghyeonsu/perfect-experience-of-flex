import React from 'react';
import TestChildPage from 'pages/TestChildPage';

function TestPage() {
  const onClickDiv = (e: any) => {
    console.log(e);
  };

  return (
    <>
      <div>
        <TestChildPage onClickMethod={onClickDiv} />
      </div>
    </>
  );
}

export default TestPage;
