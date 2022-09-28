import axios from 'axios';
import { AuthContext } from "./context/AuthContext";



async function login(data) {

    console.log('in handleclick')
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:8080/api/auth/signin", data);
      console.log(res.data.userRole);
     
      if(res.data.userRole==="ROLE_TOURIST"){
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        navigate("/");
      }else if(res.data.userRole==="ROLE_ADMIN"){
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        navigate("/dashboard");
      }else{
        dispatch({ type: "LOGOUT", payload: res.data });
      }
      
    } catch (err) {  
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }













    // let user={email, password}
    // let r= await fetch("http://localhost:8080/api/auth/login",{
    //    method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //     "Accept": "application/json",
        
    //   }, body:JSON.stringify(user)
    // });
    // r= r.JSON();  
    // localStorage.setItem("user-info", JSON.stringify(r));
   
  }


export default {  login };
