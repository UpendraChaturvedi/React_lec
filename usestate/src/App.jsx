import { useState ,useEffect} from 'react'


function App() {
  let [counterVisible, setCounterVisible] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounterVisible((prev) => !prev);
    }, 5000);
  }, []);

  return (
    <div>
      {counterVisible && <Counter />}
    </div>
  )
}
function Counter(){
  const [count, setCount] = useState(0);
  // let count=0;
  function inc() {
    setCount(count + 1);
  }
  console.log("rendered");
  useEffect(()=>{
    setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
    console.log("Interval triggered");
  },[])
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={inc}>Increase Count</button>
        <button onClick={() => setCount(count - 1)}>Decrease Count</button>
      </div>
    );
  
}

export default App
