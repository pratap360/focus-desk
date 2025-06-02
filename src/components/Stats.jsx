import React, { useContext, useEffect, useState } from "react";
import NavBar from "./NavBar";
import "./styles/stats.css";
import uselocalStorage from "../hooks/uselocalStorage";

export default function Stats() {

  const [quote,setQuote] = useState({content:'',author:''})

  // const [userData] = uselocalStorage("userData",{})
  useEffect(() => {
    const fetchQuote = async() => {
      try {
      const response = await fetch("https://api.quotable.io/random")
      const data = await response.json()     
      setQuote({
        content:data.content,
        author:data.authorSlug
      })
      } catch (error) {
        console.error("Not fetching the quote url",error);
        setQuote({
          content:"Talk is cheap Show me your Code",
          author:"Linus Torvalds"
        })
      }
      
    }
    fetchQuote()
  },[])


  const data = localStorage.getItem("userData")
  const res = JSON.parse(data)
  console.log("User Name Data:", res.username);
  

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
