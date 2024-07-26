import React from 'react';

const ReactMemo = React.memo(({ todos }) => {
  console.log('ReactMemo component rendered');
  return (
    <div>
      <h2>ReactMemo Component</h2>
      <ul id ="item-jumbotron">
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
});

export default ReactMemo;
