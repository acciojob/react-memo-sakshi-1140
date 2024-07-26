import React, { useMemo, useState } from 'react';

function UseMemo({ todos }) {
      const [count, setCount] = useState(0);
      const dynamicContent = useMemo(() => {
        return 1000000000 + count;
      }, [count]);
  const handleIncrement = () => {
    setCount(count + 1);
    console.log(`count after increment ${count}`);
  };
  return (
    <div id="calc">
      <p>{<p>{dynamicContent}</p>}</p>
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
