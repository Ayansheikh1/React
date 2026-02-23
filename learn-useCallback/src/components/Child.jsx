import React from "react";

const Child = React.memo(({ handleClick }) => {
  console.log("Child Rendered");

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
});

export default Child;


//When you type in input:

// Parent re-renders

// But handleClick reference stays same

// React.memo compares props

// No change

// Child does NOT re-render ✅

// Console will NOT log "Child Rendered"
