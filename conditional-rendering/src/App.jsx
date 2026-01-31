
import './App.css'
import LogoutBtn from './components/LogoutBtn';
import LoginBtn from './components/LoginBtn';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);


return(
  <div>
    {isLoggedIn ? <LoginBtn/> : <LogoutBtn/>
}
  </div>
)


//  using if-else rendering
//    if(isLoggedIn){



//     return(
//       <LoginBtn/>
//     )

//    }
//    else{
//     return(
//       <LogoutBtn/>
//     )
//    }
     
  
//     

}

export default App
