import { useEffect, useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count, setCount] =useState(0);

  const valRef = useRef(0);

  const btnRef = useRef();


  // let val =1; 

  useEffect(() => {
   console.log("main firse render ho gaya");
    
  })
  


  function handleClick(){
    // val = val+1;  it will rerender every time gives the output 2
    // console.log(val);
    valRef.current = valRef.current+1;
    console.log(valRef.current);
    setCount(count+1);
  }

  function handleColor(){
    btnRef.current.style.backgroundColor = "red"; //change color without rendering
  }

  return (
    <div>
      <h1>Count :{count}</h1>
      <button 
      ref={btnRef}
      onClick={handleClick}>
        Increment
        </button>
      <br />
      <br />

      <button onClick={handleColor}>change color of first button</button>
    </div>
  )
}

export default App
