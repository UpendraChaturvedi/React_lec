import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// useref := reference to a value , such that when u chnage the value the component does not rerender
function App() {
  // const inputRef = useRef();
  // const value = 1;
  // const [value, setValue] = useState(1);
  // const valueRef = useRef();

  // function focusOnInput() {
  //   inputRef.current.focus();

  // }
  // return (
  //   <>
  {
    /* <div>
        Sign up
        <input ref={inputRef} type="text" />
        <button onClick={focusOnInput}>Focus on Input</button>
      </div> */
  }

  // this is code for counter
  const [currentCount, setCurrentCount] = useState(0);
  const [timer, setTimer] = useState(0);
  function startClock() {
    let value = setInterval(() => {
      setCurrentCount((c) => c + 1);
    }, 1000);
    setTimer(value);
  }
  function stopClock() {
    clearInterval(timer);
  }

  return (
  <div>
    {currentCount}
    <button onClick={startClock}>Start</button>
    <button onClick={stopClock}>Stop</button>
  </div>
  );
}

export default App;
