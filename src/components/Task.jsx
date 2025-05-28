import React, { useState } from "react";
import NavBar from "./NavBar";
import "./styles/task.css";
import uselocalStorage from "../hooks/uselocalStorage";

export default function Task() {

  const [tasks,setTask] = uselocalStorage("todos",[
    {id:1,text:"",done:false},
    {id:2,text:"",done:false},
    {id:3,text:"",done:false},
  ])

  // const [tasks, setTasks] = useState([
  //   { id: 1, text: "", completed: false },
  //   { id: 2, text: "", completed: false },
  //   { id: 3, text: "", completed: false },
  // ]);

  const handleTaskChange = (id,newText) => {
    setTask(tasks.map(task =>
  task.id === id? {...task,text:newText}: task))
  }

  const toggleComplete = (id) => {
    setTask(tasks.map(task => task.id === id ? {...task, done:!task.done }: task));
  };

  const deleteTask = (id) => {
    setTask(tasks.filter(task => task.id !==id))
  };


  const addMoreTask = () => {
    console.log("added More taks");
    const newTask = {
      id: Date.now(),
      text: "",
      done: false
    }
    // const newTask = document.createElement('input')
    // newTask.className = 'task-checkbox'

    setTask(prevTask => [...prevTask,newTask])
  };

  return (
    <>
      <NavBar />
      <div className="title-container">
        <h3>TODO's</h3>
        <p>Top 3 Most Important Tasks of the Day</p>
      </div>

      <div className="task-container">
        <div className="task-list">
          {tasks.map((task,index) => {
            <div key={task.id} className="task-item">
              <input
              type="checkbox"
              className="task-checkbox"
              checked={task.done}
              onChange={() => toggleComplete(task.id)}
              />

              <input
              type="text"
              className="task-input"
              placeholder={`Task ${index + 1}`}
              value={task.text}
              onChange={(e) => handleTaskChange(task.id, e.target.value)}
              />
              <button className="delete-btn" onClick={() => {deleteTask(task.id)}}>
                X
              </button>
            </div>
          })}
        </div>
        <button className="add-task-btn" onClick={addMoreTask}>Add More Task</button>
      </div>
    </>
  );
}
