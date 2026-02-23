import { useState, useCallback } from "react";
import Child from "./components/Child";

function Parent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []); // no dependency

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <br /><br />

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />

      <br /><br />

      <Child handleClick={handleClick} />
    </div>
  );
}

export default Parent;
