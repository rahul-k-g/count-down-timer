import "./App.css";
import React, { useState, useEffect } from "react";
import Clock from "./components/Clock";

function App() {
  
  const [timerSeconds, setTimerSeconds] = useState(0);
  
  
   const HandleTimer=()=> {
    const val =  Math.floor(document.getElementById("countertime").value);
    if(isNaN(val))
    setTimerSeconds(0);
    else
    setTimerSeconds(val);

  };
 
useEffect(() => {
  
   const interval = setInterval(() => {
   setTimerSeconds(timerSeconds=>timerSeconds-1)
   
  }, 1000);

  return () => clearInterval(interval);
 
 // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
}, [])

useEffect(()=>{
  if(timerSeconds<=0) {
		clearInterval(setTimerSeconds(0))
		return
	}
},[timerSeconds])



  
     
    

 
  return (
    <div className="App">
     <input type="text" id="countertime"  onChange={HandleTimer}  />
      <Clock
        timerSeconds={timerSeconds}
      />
    </div>
  );
}

export default App;