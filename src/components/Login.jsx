import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import uselocalStorage from "../hooks/uselocalStorage";
export default function Login() {
  const navigate = useNavigate();

  // const [formData, setFormData] = useState({
  //   username: '',
  //   password: '',
  // });

  const [userData, setUserData] = uselocalStorage("userData",{
    username: '',
    password: '',
  });

  const formSubmit = (e) => {
    e.preventDefault()
    if (userData.username && userData.password) {
    setUserData({
      username:userData.username,
      password:userData.password
    })
    console.log("form submit & save to local storage",userData);
    navigate('/focus')
    } else {
      alert("please fill in all fields")
    }
  };

  const handleChange = (e) => {
    const {name, value} = e.target
    setUserData(preState => ({
      ...preState,
      [name]:value
    }))
  }
  
  return (
    <>
      <div>
        <h3>Login</h3>
      </div>
      <section>
        <div>
          <form onSubmit={formSubmit}>
            <div>
              <label htmlFor="username">Name:</label>
              <input 
              type="text"
              id="username"
              name="username"
              placeholder="John Doe"
              value={userData.username}
              onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input 
              type="password" 
              id="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </>
  );
}
