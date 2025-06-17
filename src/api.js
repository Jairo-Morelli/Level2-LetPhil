import axios from "axios";
const api = axios.create({
  baseURL: "https://cat-fact.herokuapp.com",
  headers:{
    "Content-Type": "application/json",
  },
});


//when creating additional components you need 
// to export yyour components if you want to be able to use them.
export default api;