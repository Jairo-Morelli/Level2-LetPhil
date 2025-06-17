import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//using axios in this
import api from "./api";

/* 
  Some notes, it seems that react is every asynchronous.
*/

let isOn=false;


/*function component, that has a prop */
function Returnhtml({isOn})
{
  if(isOn==true)
  {
    return <li>return html prop value was true</li>;
  }else{
    return null;
  }
}

function cat({data,dataRecieved})
{
  if(dataRecieved == true)
  {
    return <li></li>
  }
}


function App() {
  // data isn't the array, it is the index of the array.
  const [data, setData] = useState(0)
  // you can also use state for conditional rendering 
  const [isLoading, setIsLoading] = useState(true);

// can I call the api multiple times 
// and have it saved into my data array.
useEffect(() => {
  api.get("https://cataas.com/cat")
  //Here is where the react code, is getting set.
  .then(response => { 
    
    
    setData([response.data]);
    setIsLoading(false);

  })
  .catch(error => console.error("API error:", error));
}, []);



useEffect(() => {
  api.get("https://cataas.com/cat")
  
  .then(response => {

    setData((prev)=>[...prev,response.data]);
    setIsLoading(false);
  })

  .catch(error => console.error("API error:", error));
}, []);

/*If you leave the dependecy list parameter empty
useEffect will be stuck in an infinite loop and it 
will keep executing whatever code you have in it. */
useEffect(() => {
  api.get("https://cataas.com/cat")

  .then(response =>
  {
    setData((prev) =>[...prev, response.data]);
    setIsLoading(false);
  })

  .catch(error => console.error)
},[]);


useEffect(()=> {
  console.log("Current array:", data);
}, [data]); // <- runs only when `items changes.


console.log(isLoading);
/*1. How can I display multiple different can images. 
     How can I call my useEffect and store multiple images*/

/*You're suppose to use PascalCase for React Component */
  return (
    <> 
      <div>
        <Returnhtml isOn={true}/>
        <Returnhtml isOn={false}/>
        <Returnhtml isOn={true}/>
      </div>
    </>
  )
}

export default App
