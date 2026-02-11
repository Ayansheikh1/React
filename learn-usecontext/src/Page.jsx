import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'

const Page = () => {

    const {theme} = useContext(ThemeContext);

    const style ={
        backgroundColor: theme === 'dark' ? "#0000" : "#b6f5c6",
        color: theme === 'dark' ?  "#00ff88" : "#003300",
        minHeight: "100vh",
        padding:"40px"

    };

  return (
    <div style={style}>
      <h2>Theme Demo</h2>
      <p>Current Theme : {theme}</p>
    </div>
  )
}

export default Page
