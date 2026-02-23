import { useState , useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  function handleClick() {
    setCount(count + 1);
  }
  const doubleValue = (num) => {
    console.log("calculating...")
    for (let index = 0; index < 10000000000; index++) {
      
    }
    return num * 2;
  }

  const result = useMemo(() => { return doubleValue(count) }, [count]);
  //useMemo optimizes value calculation, not re-render.

// Component still re-renders when text changes

// Only calculation is skipped

// useMemo returned cached value


  return (
    <>
      <h1>Count: {count}</h1>
      <p>DoubleCount: {result}</p>
      <button onClick={handleClick}>Increase</button>
      <br />
      <br />
      <input type="text"
        value={text}
        onChange={(e) => setText(e.target.value)} />
    </>
  )
}

export default App
