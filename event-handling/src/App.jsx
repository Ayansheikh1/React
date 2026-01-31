
import './App.css'

function App() {
  
function handleClick(){
  alert("i am clicked");
}
  return(
     <button onClick={handleClick}> 
  Click Me
    </button>//never do imediate invocation passed function reference
      
  );
}

export default App
 