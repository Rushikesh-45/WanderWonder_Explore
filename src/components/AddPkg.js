import React from "react";
import { Formik, Form, Field, useFormik } from "formik";
import { useState } from "react";
import FormikControl from "./FormikControl";
import * as Yup from "yup";
import axios from "axios";
import touristService from "../services/tourist.service";
import { useNavigate } from "react-router-dom";
// import user from "./../context/UserInfo";
import agency from "../context/AgencyInfo";
import "./css/addpkg.css";
import Navbar from "./Navbar";
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
var yyyy = today.getFullYear();
if (dd < 10) {
    dd = '0' + dd
}
if (mm < 10) {
    mm = '0' + mm
}

today = yyyy + '-' + mm + '-' + dd;
console.log(today);

const initialValues = {
    destination: "",
    startPoint: "",
    startDate: "",
    category: "",
    description: "",
    pkgName: "",
    noOfDays: "",


};

const categories = [

    { key: 'BEACH', value: 'BEACH' },
    { key: 'ADVENTURE', value: 'ADVENTURE' },
    { key: 'CULTURAL', value: 'CULTURAL' },
    { key: 'ECO', value: 'ECO' },
    { key: 'MEDICAL', value: 'MEDICAL' },
    { key: 'WILDLIFE', value: 'WILDLIFE' }
]


const validationSchema = Yup.object({
    destination: Yup.string().required(" *required"),
    startPoint: Yup.string().required(" *required"),
    startDate: Yup.string().required(" *required"),
    category: Yup.string().required(" *required"),
    pkgName: Yup.string().required(" *required"),
    noOfDays: Yup.number().required(" *required").min(1, '*should be greater than 0'),
    description: Yup.string().required(" *required"),
});

function AddPkg() {
    const [imageFile, setImageFile] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);

    const handleImage = (event) => {
        let arr = imageFile;
        arr.push(event.target.files[0]);
        setImageFile(arr);
        showImage();
    };

    const showImage = () => {
        if (imageFile.length < 1) return;
        const newImageURL = [];
        imageFile.forEach((image) => newImageURL.push(URL.createObjectURL(image)));
        setImageURLs(newImageURL);
    };


    const navigate = useNavigate();
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const onSubmit = (values, onSubmitProps) => {
        console.log("form values-->", values);
        const tourist = values;
        const formData = new FormData();
        imageFile.forEach((image) => formData.append("file", image));
        // formData.append('file',imageFile)
        formData.append('jsondata', JSON.stringify(tourist))
        axios({
            method: 'post',
            url: 'http://localhost:8080/api/package/' + agency.getId(),
            data: formData,
            header: {
                // 'Authorization': `Bearer ${user.jwt}` ,
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',

            },
        })
            .then(response => {
                console.log("tourist added successfully", response.values);
                navigate("/agencydash");
            })
            .catch(error => {
                console.log('something went wroing', error);
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
                    <div className="addveh">
                        <Navbar /><br /><br />
                        <div className="row"  >
                            <div className="col-md-3" style={{marginLeft:'20px', marginTop:'40px'}}>
                               
                                        {imageURLs.map((image) => (
                                            
                                                // {" "}
                                                <img
                                                    src={image}
                                                    style={{ height: "200px", width: "200px" }}
                                                />
                                                // &emsp;&emsp;
                                            
                                        ))}
                            </div>
                            <div className="col-md-2"style={{ marginTop: '100px' }}>
                                    <input
                                        type="file"
                                        id="file"
                                        multiple
                                        //  onChange={(e) => setFile(e.target.files[0])}
                                        onChange={handleImage}
                                    /></div>
                            <div className="col-md-6">
                            <Form >
                            <div className="container " style={{ marginTop: '10px' }}>
                                <h3 style={{ color: 'lime', fontFamily: 'Lucida Handwriting', fontSize: '20px', fontWeight: 'bold', width: '300px' }}>{success ? success : ''}</h3>
                                <h3 style={{ color: ' #FF2800', fontFamily: 'Lucida Handwriting', fontSize: '20px', fontWeight: 'bold' }}>{error ? error : ''}</h3>
                                <button className="btn btn-secondary" style={{ marginLeft: '500px' }}> <a href="/register" style={{ fontFamily: 'Lucida Handwriting', fontWeight: 'bold' }}>---Back</a></button>



                                <div className="flex">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" style={{ height: '37px' }}>
                                            <i className="fa fa-user fa-fw " style={{ color: "#93C274" }} />
                                        </span></div>

                                    <FormikControl
                                        control="input"
                                        type="text"
                                        label="Title"
                                        name="pkgName"
                                        iclass="myinput"
                                    />
                                </div>

                                <div className="flex">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" style={{ height: '37px' }}>
                                            <i className="fa fa-user fa-fw " style={{ color: "#93C274" }} />
                                        </span></div>

                                    <FormikControl
                                        control="input"
                                        type="text"
                                        label="Destination"
                                        name="destination"
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
                                        label="Start Point"
                                        name="startPoint"
                                        iclass="myinput"
                                    />
                                </div>
                                <div className="input-group mb-3">
                                </div>

                                <div className="flex" style={{marginBottom:'25px'}}>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" style={{ height: '37px' }}>

                                            <i
                                                className="fa fa-birthday-cake fa-fw "
                                                style={{ color: "cyan" }}
                                            />
                                        </span></div>
                                    <FormikControl
                                        control="date"
                                        type="text"
                                        label="Start Date"
                                        name="startDate"
                                        mindate={today}
                                        iclass="myinput"
                                    />
                                </div>


                                <div className="flex">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" style={{ height: '37px' }}>

                                            <i
                                                className="fa fa-birthday-cake fa-fw "
                                                style={{ color: "cyan" }}
                                            />
                                        </span></div>
                                    <FormikControl
                                        control="input"
                                        type="number"
                                        label="Total Duration in days"
                                        name="noOfDays"
                                        iclass="myinput"
                                    />
                                </div>


                                <div className="flex">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" style={{ height: '37px' }}>
                                            <i className="fa fa-birthday-cake fa-fw " style={{ color: "cyan" }} />
                                        </span></div>
                                    <FormikControl
                                        control="input"
                                        type="number"
                                        label="Ticket per head"
                                        name="ticketCost"
                                        iclass="myinput"
                                    />
                                </div>


                                <div className="flex" style={{ marginTop: "25px" }} >
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" style={{ height: '37px' }}>
                                            <i className="fa fa-birthday-cake fa-fw " style={{ color: "cyan" }} />
                                        </span></div>
                                    <FormikControl
                                        control="select"
                                        label="Select Categories"
                                        name="category"
                                        options={categories}
                                        iclass="myinput"
                                    />
                                </div>

                                <div className="flex">

                                    <div className="input-group-prepend">
                                        <span className="input-group-text" style={{ height: '37px' }}>

                                            <i
                                                className="fa fa-key fa-fw "
                                                style={{ color: "red" }}
                                            />
                                        </span></div>
                                    <FormikControl
                                        control="input"
                                        type="number"
                                        label="Total Seats"
                                        name="totalSeats"
                                        iclass="myinput"
                                    /></div>


                                <div className="flex">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" style={{ height: '37px' }}>
                                            <i className="fa fa-birthday-cake fa-fw " style={{ color: "cyan" }} />
                                        </span></div>
                                    <FormikControl
                                        control="textarea"
                                        type="text"
                                        label="Description"
                                        name="description"
                                        iclass="myinput"
                                    /></div>
<div style={{marginBottom:'50px'}}>
                                <button type="reset" className="mybutton">Reset</button>
                                <button type="submit" className="mybutton" style={{ marginLeft: "60px" }}>Submit</button>
                                </div>
                            </div>
                        </Form>


                            </div>
                        </div>

                        
                    </div>
                );
            }}
            {/* <Footer/> */}
        </Formik>
    );
}

export default AddPkg;

// for text area refer video 18
