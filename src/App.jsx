import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//using axios in this
import api from "./api"; 
import API from "./api.jsx"




function App() {
  
useEffect(()=>{
  console.log("on mount");
},[]);

  return (
    <> 
      <div>
        <API/>
        <API/>
        <API/>
      </div>
    </>
  )
}

export default App
