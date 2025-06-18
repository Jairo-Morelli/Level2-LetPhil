import { useEffect, useState } from "react";
import axios from "axios";





/*function component, that has a prop */
function API({isOn})
{
const [data, setData]= useState(0);
const [isLoaded,setIsLoaded]= useState(false);

const callAPI = ()=>{

  axios.get("https://cataas.com/cat")


  .then(response=>{
    setData([response.data]);
    setIsLoaded(true);

    
  })
}

useEffect(()=>{
    console.log("Component is changing");
},[data]);

/*
  Okay jsx is kind of confusing because when you're returning the 
  jsx, whatever code is in that React function component is constantly 
  being called okay. 
*/

if(isLoaded==false)
{
callAPI();
}

  return(
    <>
      <li>
        {data[0]&& <img src={data[0].url}/>} 
      </li>
    </>
  );
}

export default API