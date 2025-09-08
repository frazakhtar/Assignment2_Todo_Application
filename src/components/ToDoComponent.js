import React, { useEffect, useState } from "react";

const ToDoComponent = () => {
  const [input, setInput] = useState();
  const [todos, setToDos] = useState([]);
  const [isChecked, setIsChecked] = useState([]);
  useEffect(() => {
  }, [input, todos]);
  const handleChange = (e) => {
    setInput(() => e.target.value);
  };
  const handleCheckboxChange = (index)=>{
        setIsChecked(prev => prev.map((ck, idx)=>idx===index? !ck: ck))
  }
  const handleClick = () => {
    setToDos((prev) => [...prev, input]);
    setIsChecked(prev => [...prev, false]);
  };
  return (
    <div className="container">
      <input
        className="input"
        type="text"
        placeholder="ToDo Title"
        onChange={(e) => handleChange(e)}
      />
      <button onClick={handleClick}>Add To-Do</button>
      <div className="displayTodos">
        {todos.length != 0 ? (
          todos.map((elem, index) => {
            return (
              <div key={index} style={{ display: "flex" }}>
                <input type="checkbox" checked={isChecked[index]} id="checkbox" value={index} onChange={()=>handleCheckboxChange(index)} />
                <div className={isChecked[index]?"strikethrough-text":""}>{elem}</div>
              </div>
            );
          })
        ) : (
          <h4>No To-Do's Item Yet</h4>
        )}
      </div>
    </div>
  );
};

export default ToDoComponent;
