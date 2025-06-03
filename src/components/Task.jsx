import React, { useEffect, useRef, useState } from "react";
import NavBar from "./NavBar";
import "./styles/task.css";
import uselocalStorage from "../hooks/uselocalStorage";

export default function Task() {

  const addTaskSfx = useRef(new Audio("../src/assets/sfx/SFX- Ui04.mp3"))
  const deleteTaskSfx = useRef(new Audio("../src/assets/sfx/SFX- Ui09.mp3"))
  const doneSfx = useRef(new Audio("../src/assets/sfx/SFX- Ui02.mp3"))

  const [tasks, setTask] = uselocalStorage("todos", [
    { id: 1, text: "", done: false , isDefault:true},
    { id: 2, text: "", done: false , isDefault:false},
    { id: 3, text: "", done: false , isDefault:false},
  ]);

  const [completedTask,setCompletedTask] = useState(0)
  const [totalTasks,setTotalTasks] = useState(() => {
    const task_save = localStorage.getItem('save-tasks')
    const initialValue = JSON.parse(task_save)
    return initialValue || 0
  })

  useEffect(() => {
    const completedCount = tasks.filter(task => task.done).length
    setCompletedTask(completedCount)

    const nonEmptyTasks = tasks.filter(task => task.text.trim() !== "").length
    setTotalTasks(nonEmptyTasks)

    localStorage.setItem('save-tasks',JSON.stringify(nonEmptyTasks))
  },[tasks])

  const TaskStats = () => {
    <div className="task-stats">
      <p>Completed: {completedTask}/ {totalTasks}</p>
      <div className="progress-bar">
        <div className="progress"
        style={
          {
            width:`${totalTasks ? (completedTask/totalTasks * 100) : 0}%`
          }
        }
        ></div>
      </div>
    </div>
  }

  const handleTaskChange = (id, newText) => {
    setTask(
      tasks.map(task => task.id === id ? { ...task, text: newText } : task)
    );
  };

  const toggleComplete = (id) => {
    setTask(
      tasks.map(task =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
    doneSfx.current.play()
    doneSfx.current.volume=0.7
  };

  const deleteTask = (id) => {
    const taskToDelete = tasks.find(task => task.id ===id)
    if(taskToDelete.isDefault) return
    setTask(tasks.filter(task => task.id !== id));
    deleteTaskSfx.current.play()
    deleteTaskSfx.current.volume = 0.5
  };

  const addMoreTask = () => {
    if (tasks.length >= 7) return
    console.log("added More taks");
    const newTask = {
      id: Date.now(),
      text: "",
      done: false,
      isDefault: false
    }
    setTask([...tasks, newTask]);
    addTaskSfx.current.play()
    addTaskSfx.current.volume = 0.7
  };

  return (
    <>
      <NavBar />
      <div className="title-container">
        <h3>TODO's</h3>
        <p>Top {tasks.length} Most Important Tasks of the Day</p>
        <TaskStats />
      </div>

      <div className="task-container">
        <div className="task-list">
          {tasks.map((task, index) => (
            <div key={task.id} className="task-item">
              <input
                type="checkbox"
                className="task-checkbox"
                checked={task.done}
                onChange={() => toggleComplete(task.id)}
              />

              <input
                type="text"
                className={`task-input ${task.done ? 'strikethrough' : ''}`}
                placeholder={`Task ${index + 1}`}
                value={task.text}
                onChange={(e) => handleTaskChange(task.id, e.target.value)}
              />
              {!task.isDefault && (
                <button
                className="delete-btn"
                onClick={() => {
                  deleteTask(task.id);
                }}
              >
                X
              </button>
              )}
            </div>
          ))}
        </div>
        {tasks.length <7 && (
          <button className="add-task-btn" onClick={addMoreTask}>
          Add More Task
        </button>
        )}
      </div>
    </>
  );
}
