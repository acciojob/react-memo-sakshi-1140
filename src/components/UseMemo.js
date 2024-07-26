import React, { useMemo } from 'react';

function UseMemo({ todos }) {
  const count = useMemo(() => todos.length, [todos]);

  return (
    <div>
      <h2>UseMemo Component</h2>
      <p id="incr-cnt">{count}</p>
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
