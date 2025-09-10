import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import Paper from '@mui/material/Paper';

const ToDoComponent = () => {
  const [input, setInput] = useState("");
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
    if(input.trim()===""){
        alert("You cannot submit empty todo")
    }else{
        setToDos((prev)=>[...prev, input])
        notify();
    }
    setIsChecked(prev => [...prev, false]);
    setInput("");
  };

  const notify = ()=> toast("Todo Added Successfully")

  return (
    <div className="container">
    <ToastContainer />
    <div style={{display:'flex'}}>
      <input
        className="input"
        type="text"
        placeholder="&nbsp;ToDo Title"
        value={input}
        onChange={(e) => handleChange(e)}
      />
      <button onClick={handleClick}>Add To-Do</button>
      </div>
      
      <div className="displayTodos">
        {todos.length != 0 ? (
          todos.map((elem, index) => {
            return (
             <Paper elevation={3} sx={{p:2,m:2}}>
                <div key={index} style={{ display: "flex" }}>
                <input type="checkbox" checked={isChecked[index]} id="checkbox" value={index} onChange={()=>handleCheckboxChange(index)} />
                <div className={isChecked[index]?"strikethrough-text":""}>{elem}</div>
                </div>
              </Paper>
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
