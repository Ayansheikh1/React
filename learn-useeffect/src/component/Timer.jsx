import React from 'react'
import { useEffect } from 'react'

const Timer = () => {
 useEffect(() => {
  const timer = setInterval(() => {
    console.log('timer tick');
  }, 1000);

  //cleanup function
  return () => {
    clearInterval(timer);
    console.log("timer cleanup")
  }
}, []);
}

export default Timer
