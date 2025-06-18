import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//using axios in this
import api from "./api"; 
import API from "./api.jsx"



function Returndata({isOn})
{
  if(isOn==true)
  {
    return <li>loaded</li>;
  }else{
    return null;
  }
}


function App() {
  // data isn't the array, it is the index of the array.
  const [data, setData] = useState(0)
  // you can also use state for conditional rendering 
  const [isLoading, setIsLoading] = useState(false);


// can I call the api multiple times 
// and have it saved into my data array.
useEffect(() => {
  api.get("https://cataas.com/cat")
  //Here is where the react code, is getting set.
  .then(response => { 
    
    
    setData([response.data]);
    setIsLoading(true);

  })
  .catch(error => console.error("API error:", error));
},[]);


useEffect(() => {
  api.get("https://cataas.com/cat")
  //Here is where the react code, is getting set.
  .then(response => { 
    
    
    setData(prev=>[...prev,response.data]);
    setIsLoading(true);

  })
  .catch(error => console.error("API error:", error));
},[]);



useEffect(() => {
  api.get("https://cataas.com/cat")
  //Here is where the react code, is getting set.
  .then(response => { 
    
    
    setData(prev=>[...prev,response.data]);
    setIsLoading(true);

  })
  .catch(error => console.error("API error:", error));
},[]);

useEffect(() =>{
  if(isLoading){
    console.log(data[0].url);
  }
},[isLoading])


console.log(data);
/*1. How can I display multiple different can images. 
     How can I call my useEffect and store multiple images*/

/*You're suppose to use PascalCase for React Component */
  return (
    <> 
      <div>
        <Returndata isOn={isLoading}/>
        {data[0]&& <img src={data[0].url}/>}
        <br/>
        <API isOn={true}/>
      </div>
    </>
  )
}

export default App
