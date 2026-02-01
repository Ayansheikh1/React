import React, { useEffect, useState } from 'react'


const Counter = () => {

    const [count,setCount]= useState(0);

    useEffect(() => {
  // Step 1: Load saved count (or start at 0)
  const savedCount = localStorage.getItem('visitCount');
  const initialCount = savedCount !== null ? Number(savedCount) : 0;
  
  // Step 2: Increment by 1
  const newCount = initialCount + 1;
  
  // Step 3: Update state
  setCount(newCount);
  
}, []); // Runs once on mount


useEffect(()=>{
    localStorage.setItem('visitCount', count.toString());
},[count]);//run every time count change


const handleReset =() =>{
    setCount(0);
}

  return (
    <div>
      <h1>Visitor Counter</h1>
      <p>Yoy have visited this page {count} times</p>
      <button onClick={handleReset}>Reset Counter</button>

    </div>
  )
}

export default Counter
