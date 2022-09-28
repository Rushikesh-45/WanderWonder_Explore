import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import "./css/login.css";
import userService from "../services/tourist.service";
import { useState , useContext} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import { AuthContext } from ".././context/AuthContext";


function LoginForm() {
  // const roles = [
  //   { key: "Tourist", value: "tourist" },
  //   { key: "Travel Agency", value: "agency" },
  // ];

  const { loading, error, dispatch } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({
   
  });
  const navigate= useNavigate();
  const [success, setSuccess] = useState("");
  const [err, setErr] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = (values, onSubmitProps) => {
      console.log("form values-->", values);
    // const user = values;
    
    // userService
    //   .login(user)
    //   .then((response) => {
    //     console.log("user login successfully", response.values);
    //     setSuccess("login successful");
    //   })
    //   .catch((error) => {
    //     console.log("something went wrong", error);
    //     setError("login failed", error);
    //   });
    console.log('in handleclick')
    // e.preventDefault();
//dispatch({ type: "LOGIN_START" });
    try {
      const res =  axios.post("http://localhost:8080/api/auth/signin", credentials);
      console.log(res.data.userRole);
     
      if(res.data.userRole==="ROLE_TOURIST"){
       // dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        navigate("/");
      }else if(res.data.userRole==="ROLE_ADMIN"){
       // dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        navigate("/dashboard");
      }else{
        //dispatch({ type: "LOGOUT", payload: res.data });
      }
      
    } catch (err) {  
      //dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
    
   };
  // async function login(){
  //   let user={email, password}
  //   let r= await fetch("http://localhost:8080/api/auth/login",{
  //      method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //       "Accept": "application/json",
        
  //     }, body:JSON.stringify(user)
  //   });
  //   r= r.JSON();  
  //   localStorage.setItem("user-info", JSON.stringify(r));
  //   // onSubmitProps.resetForm();
  //   history.push("/home");
  // }

  const initialValues = {
    email: "",
    password: "",
    
  };
  const validationSchema = Yup.object({
    email: Yup.string().email(" *invalid email").required("*Required"),
    password: Yup.string().required("*Required"),
    // role: Yup.string().required("    *Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      
      {(formik) => {
        return (
          <div className="bki">
            <Form className="login">
              <div className="wlcm">Life’s better with a backpack</div>
              <h3
                style={{
                  color: "lime",
                  fontFamily: "Lucida Handwriting",
                  fontSize: "20px",
                  fontWeight: "bold",
                  width: "300px",
                }}
              >
                {success ? success : ""}
              </h3>
              <h3
                style={{
                  color: " #FF2800",
                  fontFamily: "Lucida Handwriting",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                {error ? error : ""}
              </h3>
                {/* <FormikControl
                  name="role"
                  control="radio"
                  options={roles}
                  label="Role"
                /> */}

                  {/* ---------------------------------------------------------------- */}

              <br />
              <p
                style={{
                  color: "#FFCC66",
                  fontSize: "20px",
                  fontFamily: "Lucida Handwriting",
                  fontWeight: "bold",
                }}
              >
                Enter Email:
              </p>

     {/* ---------------------------------------------------------------- */}

              <div className="flex">
                <div className="input-group-prepend">
                  <span className="input-group-text" style={{ height: "37px" }}>
                    
                    <i
                      className="fa fa-envelope "
                      style={{ color: "#BED0E8" }}
                    />
                  </span>
                </div>
                <FormikControl
                  control="input"
                  type="email"
                  label="Email"
                  name="email"
                  style={{ width: "300px" }}
                />
              </div>
              
             
              <p
                style={{
                  color: "#FFCC66",
                  fontSize: "20px",
                  fontFamily: "Lucida Handwriting",
                  fontWeight: "bold",
                }}
              >
                Enter Password:
              </p>
              <div className="flex">  
              <div className="input-group-prepend">
                <span className="input-group-text" style={{ height: "37px" }}>
                  
                  <i
                    className="fa fa-unlock-alt "
                    style={{ color: "#BED0E8" }}
                  />
                </span>
              </div>



           


                <FormikControl
                  control="input"
                  type="password"
                  label="Password"
                  name="password"
                  style={{ width: "300px" }}
                />
              </div>
              <a href="forgotpassword">
                
                <div className="forgotpass"> Forgot Password ?</div>
              </a>

              <div>
                <a href="/register">
                  <button type="button" className="mybutton">
                    Sign-up
                  </button>
                </a>
                <button
                  type="submit"
                  
                  disabled={!formik.isValid}
                  className="mybutton"
                >
                  Log-in
                </button>
              </div>
            </Form>
          </div>
        );
      }}
    </Formik>
  
  
  
//     <>
//     <h3>Log in</h3>
// <div className='bki'>
//   <div className="login">
//   <div className="wlcm">Life’s better with a backpack</div>
//                <h3
//                 style={{
//                   color: "lime",
//                   fontFamily: "Lucida Handwriting",
//                   fontSize: "20px",
//                   fontWeight: "bold",
//                   width: "300px",
//                 }}
//               >
//                 {success ? success : ""}
//               </h3>
//               <h3
//                 style={{
//                   color: " #FF2800",
//                   fontFamily: "Lucida Handwriting",
//                   fontSize: "20px",
//                   fontWeight: "bold",
//                 }}
//               >
//                 {error ? error : ""}
//               </h3>
// <div className="form-group">
//     <label>Email</label>
//     <input type="email" className="form-control" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
// </div>

// <div className="form-group">
//     <label>Password</label>
//     <input type="password" className="form-control" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}/>
// </div>

// <div className="form-group">
//     <div className="custom-control custom-checkbox">
//         <input type="checkbox" className="custom-control-input" id="customCheck1" />
//         <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
//     </div>
// </div>

// <button type="button" onClick={login} className="btn btn-dark btn-lg btn-block">Sign in</button>
// <p className="forgot-password text-right">
//     Forgot <a href="#">password?</a>
// </p>
// </div>
// </div>
//     </>


  
    );
}

 export default LoginForm;
