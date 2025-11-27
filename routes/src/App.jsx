import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate,Links,Outlet } from "react-router-dom";
// import {BrowserRouter,Routes,Route,Link} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* bad way of navigating from one page to other */}
      {/* <a href="/">Allen </a>
      <a href="/neet/online-coaching-class-11">class 11</a>
      <a href="/neet/online-coaching-class-12">class 12</a>  */}

      <BrowserRouter>
        {/* <Link to="/">Allen </Link>
        <Link to="/neet/online-coaching-class-11">class 11</Link>
        <Link to="/neet/online-coaching-class-12">class 12</Link> */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/neet/online-coaching-class-11"
              element={<Class11program />}
            />
            <Route
              path="/neet/online-coaching-class-12"
              element={<Class12program />}
            />
            <Route path="/" element={<Landing />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        contact me
      </BrowserRouter>
    </>
  );
}

function Layout() {
  return (
    <div style={{ height: "100vh", width: "100%", background: "#1d0303ff" }}>
      header----------------------
      <div style={{ height: "90vh", width: "100%", background: "yellow" }}></div>
      footer
    </div>
  );
}
function NotFound() {
  return <h1>404 - Not Found</h1>;
}
function Landing() {
  return <h1>Welcome to allen</h1>;
}
function Class11program() {
  return (
    <div>
      <h1>Class 11 Online Coaching</h1>
      <p>Welcome to the Class 11 online coaching program.</p>
    </div>
  );
}
function Class12program() {
  const navigate = useNavigate();
  function redirectUser() {
    navigate("/");
  }

  return (
    <div>
      <h1>Class 12 Online Coaching</h1>
      <p>Welcome to the Class 12 online coaching program.</p>
      <button onClick={redirectUser}>Go to landing</button>
    </div>
  );
}

export default App;
