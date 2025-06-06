
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login"
import Focus from "./components/Focus";
import Task from "./components/Task";
import Stats from "./components/Stats"
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <div className="app-contianer">
              <Home />
              <Link to='/login'>
                <button>Login</button>
              </Link>
            </div>
          </>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='/focus' element={<Focus />} />
        <Route path='/task' element={<Task />} />
        <Route path='/stats' element={<Stats />} />
      </Routes>
    </Router>
  );
}

export default App;
