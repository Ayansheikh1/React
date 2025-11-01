import React, { useState } from 'react'

function TemperatureConverter() {
  const [celsius,setcelsius] =useState("");
  const [farhenite,setfarhenite] =useState("");

  function handleCelsiusChange(e){
    const c = e.target.value;
    setcelsius(c);
    setfarhenite((c * 9) / 5 + 32);
  }

  function handleFarheniteChange(e){
    const f = e.target.value;
   
    setfarhenite(f);
    setcelsius(((f - 32) * 5) / 9);

  }

  
  return (
    <div>
      <h1>Temperature Converter</h1>
      <input type="number" placeholder='celsius' value={celsius}
      onChange={handleCelsiusChange}/> {" "}°C ↔{" "}
     
      <input 
      type='number' placeholder='farhenite' value={farhenite} 
      onChange={handleFarheniteChange} 
      />{" "} °F
      
    </div>
  )
}

export default TemperatureConverter
