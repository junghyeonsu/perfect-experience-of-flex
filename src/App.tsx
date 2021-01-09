import React from 'react';
import './App.css';

const name = [
  {
    name: 'hyeonsu',
  },
  {
    name: 'jongong',
  },
  {
    name: 'hi',
  },
];

function App() {
  return (
    <div className="App" style={{ color: 'red' }}>
      <p>hi</p>
      {name.map((person) => (
        <div key={person.name}>{person.name}</div>
      ))}
    </div>
  );
}
export default App;
