import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef,useEffect } from 'react';

function App() {
  const[time, setTime] = useState(0);

  let timerRef = useRef(null);


function startTimer(){
  timerRef.current = setInterval(() =>{
    setTime(time => time+1);
  },1000)
}

function stopTimer(){
 clearInterval(timerRef.current);
 timerRef.current = null;
}

function resetTimer(){
stopTimer();
setTime(0);
}

useEffect(() => {
 console.log("rendering.....");

  
})


 
  return (
    <div className='container'>
      <h1>StopWatch : {time}</h1>
      <button
      onClick={startTimer}
      >Start
      </button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  )
}

export default App
