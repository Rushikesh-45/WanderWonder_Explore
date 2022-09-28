import React from "react";
import { Formik, Form, Field, useFormik } from "formik";
import { useState } from "react";
import FormikControl from "./FormikControl";
import * as Yup from "yup";
import axios from "axios";
import touristService from "../services/tourist.service";
import {  useNavigate } from "react-router-dom";


import "./css/Signup.css";
import Navbar from "./Navbar";

const initialValues = {
  fullName: "",
  email: "",
  dob: "",
  password: "",
  confirmPassword: "",
  mobNumber: "",
  gender: "",
  location: "",
  
};

const genders = [
  { key: '--Select gender--', value: '' },
  { key: 'Male', value: 'Male' },
  { key: 'Female', value: 'Female' },
  { key: 'Transgender', value: 'Transgender' }
]


const validationSchema = Yup.object({
  fullName: Yup.string().required(" *Required"),
  email: Yup.string()
    .email(" *Invalid Email ID")
    .max(255)
    .required(" *Required"),
  password: Yup.string().required(" *Required").matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    " **Weak Password"
  ),
  confirmPassword: Yup.string()
    .required(" *Required")
    .oneOf([Yup.ref("password"), null], " Passwords must match"),
  mobNumber: Yup.string().required(" *Required").matches(/^[6-9]\d{9}$/, " *Invalid Mobile Number"),
  dob: Yup.string().required(" *Required"),
  gender: Yup.string().required(" *Required"),
  location: Yup.string().required(" *Required"),
});

function SignUp() {
const navigate= useNavigate();
const [file, setFile] = useState("");
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const onSubmit = (values, onSubmitProps) => {
    console.log("form values-->", values);
   const tourist = values;
    const formData=new FormData();
    formData.append('file',file)
    formData.append('jsondata',JSON.stringify(tourist))
    axios({
      method: 'post',
      url: 'http://localhost:8080/api/auth/tourist_signup',
      data: formData,
      header: {
        // 'Authorization': `Bearer ${user.jwt}` ,
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
       
      },
  })
     .then(response => {
         console.log("tourist added successfully", response.values);
         navigate("/home");
        //  setSuccess("Registration successful, It’s a big world. Let’s explore it together...");
     })
     .catch(error => {
         console.log('something went wroing', error);
        //  setError("opps... Something went wrong. Please try again.");
     })
 
     onSubmitProps.resetForm();
 };
 

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <div className="signupform">
            <Navbar/>
              <br/><br/>
             
            <Form >
            <span className="wlcm" style={{fontFamily: 'Lucida Handwriting', color: '#BED0E8'}}> Let's Wander to Make Wonders...</span>
            <div className=" box" style={{ marginTop: '10px', marginLeft: '250px'}}>
              <h3 style={{color: 'lime', fontFamily: 'Lucida Handwriting', fontSize: '20px', fontWeight: 'bold', width: '300px'}}>{success ? success : ''}</h3>
              <h3 style={{color: ' #FF2800', fontFamily: 'Lucida Handwriting', fontSize: '20px', fontWeight: 'bold'}}>{error ? error : ''}</h3>
                <button className="btn btn-secondary" style={{marginLeft:'500px'}}> <a href="/register" style={{ fontFamily: 'Lucida Handwriting',  fontWeight: 'bold'}}>Back</a></button>

            <a href='/login'> <div  style={{ color: "blue", marginLeft: "130px", marginBottom: "10px" }}> ~Log-in | Already have an account  </div> </a>

            <div>
              {/*  var base64Image=`data:image/jpg;base64,${item.images}`;
              <img src={ base64Image} alt="" className="siImg" /> */}
              {/* <input type=""/> */}
              <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  // style={{ display: "none" }}
                />
            </div>


                <div className="flex">
                  
                <div className="input-group-prepend">
                  <span className="input-group-text" style={{height: '37px'}}>
                  
                    <i
                      className="fa fa-user fa-fw "
                      style={{ color: "#93C274" }}
                    />
                  </span></div>

                  <FormikControl
                    control="input"
                    type="text"
                    label="Enter Full Name"
                    name="fullName"
                    iclass="myinput"
                  />
                  </div>
                <div className="flex" >
                <div className="input-group-prepend">
                  <span className="input-group-text" style={{height: '37px', }}>
                  {/* <span className="input-group-text, mform-control" style={{}}> */}
                   
                    <i
                      className="fa fa-envelope fa-fw "
                      style={{ color: "#BED0E8" }}
                    />
                  </span></div>
                  <FormikControl
                    control="input"
                    type="text"
                    label="Email"
                    name="email"
                    iclass="myinput"
                  />
                </div>
                <div className="input-group mb-3">
</div>
                <div className="flex" >
                <div className="input-group-prepend">
                  <span className="input-group-text" style={{height: '37px', }}>
                  {/* <span className="input-group-text, mform-control" style={{}}> */}
                   
                    <i
                      className="fa fa-envelope fa-fw "
                      style={{ color: "#BED0E8" }}
                    />
                  </span></div>
                  <FormikControl
                    control="input"
                    type="text"
                    label="Your Location"
                    name="location"
                    iclass="myinput"
                  />
                </div>
                <div className="input-group mb-3">
</div>
                
                <div className="flex">
                <div className="input-group-prepend">
                  <span className="input-group-text" style={{height: '37px'}}>
                   
                    <i
                      className="fa fa-birthday-cake fa-fw "
                      style={{ color: "cyan" }}
                    />
                  </span></div>
                  <FormikControl
                    control="date"
                    type="text"
                    label="Date of Birth"
                    name="dob" 
                    maxdate="2010-01-01"
                    iclass="myinput"
                  />
                  </div>
                <div className="flex" style={{ marginTop: "25px"}} >
                <div className="input-group-prepend">
                  <span className="input-group-text" style={{height: '37px', }}>
                    <i
                      className="fa fa-venus-mars fa-fw "
                      style={{ color: "#384445" }}
                    />
                  </span></div>
                  <FormikControl
                    control="select"
                    label="Select Gender"
                    name="gender" 
                    options={genders}
                    iclass="myinput"
                  />
                </div>

                <p style={{color: "yellow" }}>Password Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character</p>

                <div className="flex">
                  {/* <span className="input-group-text, mform-control"> */}
                  
                <div className="input-group-prepend">
                  <span className="input-group-text" style={{height: '37px'}}>
                   
                    <i
                      className="fa fa-key fa-fw "
                      style={{ color: "red" }}
                    />
                  </span></div>
                  <FormikControl
                    control="input"
                    type="password"
                    label="Password"
                    name="password"
                    iclass="myinput"
                  /></div>
                  <div className="flex" >
                  {/* <span className="input-group-text, mform-control" style={{}}> */}
                  
                <div className="input-group-prepend">
                  <span className="input-group-text" style={{height: '37px', }}>
                  
                    <i
                      className="fa fa-key fa-fw "
                      style={{ color: "red" }}
                    />
                  </span></div>
                  <FormikControl
                    control="input"
                    type="password"
                    label="Confirm Password"
                    name="confirmPassword"
                    iclass="myinput"
                  />
                </div>
                <div className="flex" >
                  {/* <span className="input-group-text, mform-control"> */}
                  
                <div className="input-group-prepend">
                  <span className="input-group-text" style={{height: '37px'}}>
                
                    <i
                      className="fa fa-phone fa-fw "
                      style={{ color: "lime" }}
                    />
                  </span></div>
                  <FormikControl
                    control="input"
                    type="number"
                    label="Phone Number"
                    name="mobNumber"
                    iclass="myinput"
                  />
                  {/* <span className="input-group-text, mform-control" style={{}}> */}
                 
               
                </div>


                <button type="reset" className="mybutton">Reset</button>

                <button type="submit" className="mybutton" style={{marginLeft: "60px" }}>Submit</button>
              </div>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
}

export default SignUp;

// for text area refer video 18
