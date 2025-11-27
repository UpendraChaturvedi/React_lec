import { createContext, useState } from 'react'
import './App.css'
const bulbContext=createContext()


function App() {
  const [bulbOn, setBulbOn] = useState(true);
  return (
    <div>
      <LightBulb bulbOn={bulbOn} setBulbOn={setBulbOn}/>
    </div>
  )
}
function LightBulb({ bulbOn, setBulbOn }){
  // const bulbOn=getBulbOn();
  return <div>
    <BulbState bulbOn={bulbOn}/>
    <ToggleBulbState setBulbOn={setBulbOn}/>
  </div>
}
function BulbState({ bulbOn }){

  return <div>
    <p>The bulb is currently: {bulbOn ? "On" : "Off"}</p>
  </div>
}
function ToggleBulbState({ setBulbOn }){
  return <div>
    <button onClick={() => setBulbOn(bulbOn => !bulbOn)}>Toggle Bulb</button>
  </div>
}

export default App
