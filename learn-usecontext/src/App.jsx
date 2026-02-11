
import { useState } from 'react'
import './App.css'
import ThemeContext from './ThemeContext';
import Home from './Home';

function App() {

  const [theme , setTheme] = useState('light');

  const toggleTheme = () =>{
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  }
    return (
      <div> 
 <ThemeContext.Provider value = {{theme , toggleTheme}}>
      <Home />
    </ThemeContext.Provider>
      </div>
   
  
    )
  }

export default App
