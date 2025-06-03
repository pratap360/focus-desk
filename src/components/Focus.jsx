import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./NavBar";
import "../components/styles/focus.css";

export default function Focus() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(new Audio("../src/assets/music/Yummy.mp3"))

  const [completedSessions,setCompletedSessions] = useState(0)
  const [todaySessions,setTodaySessions] = useState(() => {
    const saved = localStorage.getItem('today-Pomodoros')
    const initialValue = JSON.parse(saved)
    return initialValue || 0;
  });

  useEffect(() => {
    const lastResetDate = localStorage.getItem('lastResetDate')
    const today = new Date().toDateString()
    if(lastResetDate !== today){
      setTodaySessions(0)
      localStorage.setItem('lastResetDate',today)
    }
  },[])

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            setIsRunning(false);
            setCompletedSessions(prev => prev + 1)
            setTodaySessions(prep => {
              const newValue = prep + 1;
              localStorage.setItem('todayPomodoros',JSON.stringify(newValue))
              return newValue;
            });
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, minutes, seconds]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setMinutes(25);
    setSeconds(0);
    setIsRunning(false);
  };

  const musicPlayer = () => {
    if(isPlaying){
      audioRef.current.pause()
    }else{
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
    console.log("music is playing");
  }


  return (
    <>
      <NavBar />
      <div className="timer-container">
        <div className="timer-circle">
          <div className="timer-text">
            {String(minutes).padStart(2, "0")}:
            {String(seconds).padStart(2, "0")}
          </div>
        </div>
        <div className="session-stats">
          <p>Today's Session: {todaySessions}</p>
          <p>Current Session: {completedSessions}</p>
        </div>
        <div className="timer-controls">
          <button onClick={toggleTimer}>{isRunning ? "Pause" : "Play"}</button>
          <button onClick={resetTimer}>Reset</button>
        </div>
        <div className="music-control">
          <button onClick={musicPlayer}>{isPlaying? "Pause Music":"Play Music"}</button>
        </div>
      </div>
    </>
  );
}
