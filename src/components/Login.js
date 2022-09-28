import axios from "axios";
import { useContext, useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from ".././context/AuthContext";
import Navbar from "./Navbar";
// import "./login.css";

const Login = () => {
  const [er, setEr] = useState('');
  const [credentials, setCredentials] = useState({
   
  });

   const {loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  
  const handleClick = async (e) => {
      console.log(credentials);
    console.log('in handleclick')
    e.preventDefault();
    // dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:8080/api/auth/signin", credentials);
      console.log(res.data);
     
      if(res.data.role=="TOURIST"){
        bookedpkgs();
        sessionStorage.setItem("token", "Bearer " + res.data.jwt);
        sessionStorage.setItem("user", JSON.stringify(res.data));
        sessionStorage.setItem( "role",  JSON.parse(sessionStorage.getItem("user")).role);
     
        navigate('/home');
      }else if(res.data.role==="AGENCY"){
        sessionStorage.setItem("token", "Bearer " + res.data.jwt);
        sessionStorage.setItem("user", JSON.stringify(res.data));
        sessionStorage.setItem("role", JSON.parse(sessionStorage.getItem("user")).role);
       console.log(sessionStorage.getItem("token"));
       console.log(sessionStorage.getItem("user")); 
       navigate("/agencydash");
      }else {
        sessionStorage.setItem("token", "Bearer " + res.data.jwt);
        sessionStorage.setItem("user", JSON.stringify(res.data));
        sessionStorage.setItem("role", "ADMIN");
       navigate("/admin");
      }
      
    } catch (err) {  
            setEr('**invalid creadentials');
    }
  };

  const bookedpkgs=async(e)=>{
    await axios.get("http://localhost:8080/api/package")
    .then(res=>{
        sessionStorage.setItem('search', JSON.stringify(res.data));
        console.log(res.data);
        // navigate("/pastpkgs");
    }).catch((err)=>{console.log(err);});
  }

  return (
    <div className="bki">
      <Navbar/>
        <br/><br />
        <div className="login">
        <div className="wlcm">Life’s better with a backpack</div>

        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="card">
              <h2 className="card-title text-center">Login </h2>
        <h3 style={{color: 'red', fontFamily: 'Lucida Handwriting', fontSize: '20px', fontWeight: 'bold', width: '300px'}}>{er ? er : ''}</h3>
            
              <div className="card-body py-md-4">
                <form _lpchecked={1}>
                  <div className="form-group">
                  <div className="flex">
                <div className="input-group-prepend">
                  <span className="input-group-text" style={{ height: "37px" }}>
                    
                    <i
                      className="fa fa-envelope "
                      style={{ color: "#BED0E8" }}
                    />
                  </span>
                </div>
                    <input type="email" className="form-control" id="email" placeholder="Email" onChange={handleChange}/>
                  </div></div>
                  <div className="form-group">
                  <div className="flex">
                <div className="input-group-prepend">
                  <span className="input-group-text" >
                    
                    <i
                      className="fa fa-unlock-alt "
                      style={{ color: "#BED0E8" }}
                    />
                  </span>
                </div>
                    <input type="password" className="form-control" id="password" placeholder="Password"   onChange={handleChange}/>
                  </div></div>
                 
                  <div className="d-flex flex-row align-items-center justify-content-between">
                  <Link to="/signup">Create Account</Link>
                    <button  onClick={handleClick} disabled={loading} className="btn btn-primary">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        </div>
        
      </div>
  );
};

export default Login;