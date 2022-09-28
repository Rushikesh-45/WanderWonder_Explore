import React from "react";
import { Formik, Form, Field, useFormik } from "formik";
import { useState } from "react";
import FormikControl from "./FormikControl";
import * as Yup from "yup";
import agencyService from "../services/agency.service";
import axios from "axios";

import "./css/AgencyRegister.css";
import {  useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const initialValues = {
    agencyName: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobNumber: "",
    licenceNo: "",
    city: "",

};


const validationSchema = Yup.object({
    agencyName: Yup.string().required(" *Required"),
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
    licenceNo: Yup.string().required(" *Required"),
    city: Yup.string().required(" *Required"),
    //password: Yup.string().required("*Required")
});

function RegisterAgency() {
const [file, setFile] = useState("");

const navigate = useNavigate();
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const onSubmit = (values, onSubmitProps) => {
        console.log("form values-->", values);
        const agency = values;

        const formData=new FormData();
    formData.append('file',file)
    formData.append('jsondata',JSON.stringify(agency))
    axios({
      method: 'post',
      url: 'http://localhost:8080/api/auth/agency_signup',
      data: formData,
      header: {
        // 'Authorization': `Bearer ${user.jwt}` ,
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
       
      },
  })
     .then(response => {
         console.log("agecncy added successfully", response.values);
         navigate("/home");
        //  setSuccess("Registration successful, It’s a big world. Let’s explore it together...");
     })
     .catch(error => {
         console.log('something went wroing', error);
        //  setError("opps... Something went wrong. Please try again.");
     })
 
     onSubmitProps.resetForm();

        // //create
        // agencyService.create(agency)
        //     .then(response => {
        //         console.log("agency added successfully", response.values);
        //         setSuccess("Registration successful");
        //         navigate('/login');
        //     })
        //     .catch(error => {
        //         console.log('something went wroing', error);
        //         setError("opps... Something went wrong. Please try again.");
        //     })

        // onSubmitProps.resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {(formik) => {
                return (
                    <div className="signupform2">
                        <Navbar/>
                        <br /><br />
                        <Form >
                            <div className=" box" style={{ marginTop: '10px', marginLeft: '800px' }}>
                                <h3 style={{ color: 'lime', fontFamily: 'Lucida Handwriting', fontSize: '20px', fontWeight: 'bold', width: '300px' }}>{success ? success : ''}</h3>
                                <h3 style={{ color: ' #FF2800', fontFamily: 'Lucida Handwriting', fontSize: '20px', fontWeight: 'bold' }}>{error ? error : ''}</h3>
                                <button className="btn btn-secondary" style={{ marginLeft: '500px' }}> <a href="/register" style={{  fontFamily: 'Lucida Handwriting', fontWeight: 'bold' }}>Back</a></button>

                                <a href='/login'> <div style={{ color: "blue", marginLeft: "130px", marginBottom: "10px" }}> ~Log-in | Already have an account  </div> </a>
                                <span>Upload Profile Photo : </span>
                                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  // style={{ display: "none" }}
                />
                                <div className="flex">

                                    <div className="input-group-prepend">
                                        <span className="input-group-text" style={{ height: '37px' }}>

                                            <i
                                                className="fa fa-train fa-fw "
                                                style={{ color: "#93C274" }}
                                            />
                                        </span></div>

                                    <FormikControl
                                   
                                        control="input"
                                        type="text"
                                        label="Enter Agency Name"
                                        name="agencyName"
                                        iclass="myinput"
                                    />
                                </div>
                                <div className="flex" >
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" style={{ height: '37px', }}>
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
                              
                                <div className="flex" >
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" style={{ height: '37px', }}>
                                            {/* <span className="input-group-text, mform-control" style={{}}> */}

                                            <i
                                                className="fa fa-location-arrow fa-fw "
                                            />
                                        </span></div>
                                    <FormikControl
                                        control="input"
                                        type="text"
                                        label="Location"
                                        name="city"
                                        iclass="myinput"
                                    />
                                </div>
                                
                                {/* <p style={{ color: "yellow" }}>Password Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character</p> */}

                                <div className="flex">
                                    {/* <span className="input-group-text, mform-control"> */}

                                    <div className="input-group-prepend">
                                        <span className="input-group-text" style={{ height: '37px' }}>

                                            <i
                                                className="fa fa-key "
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
                                        <span className="input-group-text" style={{ height: '37px', }}>

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
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" style={{ height: '37px' }}>

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
                                </div>
                                <div className="flex" >
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" style={{ height: '37px' }}>

                                            <i
                                                className="fa fa-id-card  "
                                                style={{ color: "blue" }}
                                            />
                                        </span></div>
                                    <FormikControl
                                        control="input"
                                        type="text"
                                        label="Licence Number"
                                        name="licenceNo"
                                        iclass="myinput"
                                    />
                                </div>


                                <button type="reset" className="mybutton">Reset</button>

                                <button type="submit" className="mybutton" style={{ marginLeft: "60px" }}>Submit</button>
                            </div>
                        </Form>
                    </div>
                );
            }}
        </Formik>
    );
}

export default RegisterAgency;
