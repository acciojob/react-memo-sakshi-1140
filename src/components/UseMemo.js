import React, { useMemo, useState } from 'react';

function UseMemo({ todos }) {
      const [count, setCount] = useState(0);
  const NoOfTask = useMemo(() => todos.length, [todos]);
  const handleIncrement = () => {
    setCount(count + 1);
    console.log(`count after increment ${count}`);
  };
  return (
    <div id="calc">
      <h2>UseMemo Component</h2>
      <p>No of Tasks: {NoOfTask}</p>
      <button id="incr-cnt" onClick={handleIncrement}>
        {count}
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li id={`todo-${index}`} key={index}>{todo}
          
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UseMemo;
