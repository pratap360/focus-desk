import React, { useContext, useEffect, useState } from "react";
import NavBar from "./NavBar";
import "./styles/stats.css";
import uselocalStorage from "../hooks/uselocalStorage";

export default function Stats() {
  const [quote, setQuote] = useState({ content: "", author: "" });
  const todaySessions = JSON.parse(localStorage.getItem("todayPomodoros")) || 0;
  // const [userData] = uselocalStorage("userData",{})
  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        setQuote({
          content: data.content,
          author: data.authorSlug,
        });
      } catch (error) {
        console.error("Not fetching the quote url", error);
        setQuote({
          content: "Talk is cheap Show me your Code",
          author: "Linus Torvalds",
        });
      }
    };
    fetchQuote();
  }, []);

  const data = localStorage.getItem("userData");
  const res = JSON.parse(data);
  console.log("User Name Data:", res.username);

  const completedTasks = JSON.parse(localStorage.getItem("completedTask")) || 0;
  const totalTasks = JSON.parse(localStorage.getItem("save-tasks")) || 0;
  const completionRate = totalTasks
    ? Math.round((completedTasks / totalTasks) * 100)
    : 0;

  return (
    <>
      <NavBar />
      <div className="stats-tittle">
        {/* <h3>{userData.username}'s FocusDesk Stats</h3> */}
        <h3>{res.username}'s FocusDesk Stats</h3>
        <hr />
      </div>

      <div className="quote-container">
        <p>{quote.content}</p>
        <p> - {quote.author}</p>
      </div>

      <div className="stats-container">
        <div className="focus-stats">
          <p>Track Your Focused Time</p>
          <hr />
          {/* * showing data using simple text  */}
          {/* <div className="focus-data">
          <p>Completed Session: {todaySessions}</p>
          <p>Total Focus Time: {todaySessions * 25} minutes</p>
        </div> */}

          {/* * showing data using table  */}
          <table className="focus-table">
            <thead>
              <tr>
                <th>Metric</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Today's Sessions</td>
                <td>{todaySessions}</td>
              </tr>
              <tr>
                <td>Focus Time Today</td>
                <td>{todaySessions * 25} minutes</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="tasks-stats">
          <p>Track Your Completed Task</p>
          <hr />
          <div className="tasks-data">
            <table className="tasks-table">
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Completed Task</td>
                  <td>{completedTasks}</td>
                </tr>
                <tr>
                  <td>Total Tasks</td>
                  <td>{totalTasks}</td>
                </tr>
                <tr>
                  <td>Completion Rate</td>
                  <td>{completionRate}%</td>
                </tr>
              </tbody>
            </table>
            <div className="completion-progress">
              <div
                className="progress-bar"
                style={{ width: `${completionRate}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
