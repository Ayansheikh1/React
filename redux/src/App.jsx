import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementByAmount } from './features/counter/counterSlice'
import { use } from 'react'

function App() {
  const count = useSelector((state) => state.counter.value);
  const [amount,setAmount] = useState(0);
  const dispatch = useDispatch();


  function handleIncrementClick() {
    dispatch(increment());
  }
  function handleDecrementClick() {
    dispatch(decrement());
  }
  function handleRestClick() {
    dispatch(reset());
  }
  function handleIncrementByAmountClick() {
    dispatch(incrementByAmount(amount));
  }

  return (
    <div className='container'>
      <button onClick={handleDecrementClick}>-</button>
      <p>Count: {count}</p>
      <button onClick={(handleIncrementClick)}>+</button>
      <br />
      <br />
      <input 
      type="Number"
      value={amount} 
      placeholder='Enter Amount'
      onChange={(e) => setAmount(e.target.value)}/>
      <br />
      <br />
      <button onClick={handleIncrementByAmountClick}>IncrementByAmount</button>
      <br />

      <button onClick={handleRestClick}>Reset</button>


    </div>
  )
}

export default App
