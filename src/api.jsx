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

callAPI();


useEffect(()=>{
  console.log("data:" + data);
},[data])

  return(
    <>
      <li>
        {data[0]&& <img src={data[0].url}/>} 
      </li>
    </>
  );
}

export default API