import React, { useMemo, useState } from "react";
import UseMemo from "./UseMemo";
import ReactMemo from "./ReactMemo";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [skillInput, setSkillInput] = useState("");
  const [count, setCount] = useState(0);

  const addTask = () => {
    setTaskList([...taskList, "New todo"]);
    console.log(taskList);
  };
  const handleIncrement = () => {
    setCount(count + 1);
    console.log(`count after increment ${count}`);
  };
  const handleSkillChange=(e)=>{
    setSkillInput(e.target.value);

  }
  const handleSkillSubmit=()=>{
    if(skillInput.length>5){
        setTaskList([...taskList,skillInput]);
        setSkillInput("");

    }else{
        alert('Task must be more than 5 characters long.')
    }
  }
  const memoizedTodos = useMemo(() => taskList, [taskList]); //gpt
  return (
    <div id="main">
      <button id="add-todo-btn" onClick={addTask}>
        Add Todo
      </button>
      <button id="increment-btn" onClick={handleIncrement}>
        {count}
      </button>
      <input
      id="skill-input"
      type="text"
      value={skillInput}
      onChange={handleSkillChange}
      />
      <button id="skill-btn"
      onClick={handleSkillSubmit}>Add Skill</button>
       
       <UseMemo todos={memoizedTodos} />
       <ReactMemo todos={memoizedTodos} />
   
    </div>

  );
}

export default App;
