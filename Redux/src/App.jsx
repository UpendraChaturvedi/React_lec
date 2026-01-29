import { useSelector, useDispatch } from "react-redux";
import { increment } from "./redux/slices/counter";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);

  return (
    <>
      <h1>
        The value of count
        <span style={{ backgroundColor: "white" }}>{count}</span>
      </h1>

      <button onClick={() => dispatch(increment())}>Increment</button>
    </>
  );
}

export default App;
