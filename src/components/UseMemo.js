import React, { useMemo } from 'react';

function UseMemo({ todos }) {
  const count = useMemo(() => todos.length, [todos]);

  return (
    <div>
      <h2>UseMemo Component</h2>
      <p>Number of tasks: {count}</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseMemo;
