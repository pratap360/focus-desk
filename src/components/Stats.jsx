import React from "react";
import NavBar from "./NavBar";
import "./styles/stats.css";

export default function Stats() {
  return (
    <>
      <NavBar />
      <div className="stats-tittle">
        {/* <h3>{userData.username}'s FocusDesk Stats</h3> */}
        <h3>Pratap's FocusDesk Stats</h3>
        <hr />
      </div>
    <div className="stats-container">
      <div className="focus-stats">
        <p>You have Focused for this 'time'</p>
          <hr />
        <div className="focus-data">
          <p>show the top 10 records </p>
          <ol>
            <li>50 Mins</li>

          </ol>
        </div>
      </div>

      <div className="tasks-stats">
        <p>You have Completed 'N' tasks'</p>
          <hr />
        <div className="tasks-data">
          <p>show the top 7 records which is completed but not deleted</p>
          <ol>
            <li>task 1</li>
            <li>task 2</li>
            <li>task 3</li>
          </ol>
        </div>
      </div>
    </div>
    </>
  );
}
