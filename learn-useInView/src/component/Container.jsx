import {  useInView } from "motion/react"
import { useRef } from "react";

const Container = () => {
  const ref = useRef();
    const inView = useInView(ref);
    
  return (
    <div ref={ref}>
      {inView ? "visibile" : "not visible"}

    </div>
  )
}

export default Container