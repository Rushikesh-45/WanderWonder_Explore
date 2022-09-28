import React from 'react'
import { Formik, Form, Field, useFormik } from "formik";
import { useState } from "react";
import FormikControl from "../FormikControl";
import noprofile from '../css/images/noprofile.jpg'
import * as Yup from "yup";
import axios from 'axios';
import Navbar from '../Navbar';
import './registerveh.css'
import ImageUp from '../ImageUpload/ImageUp';
import agency from "../../context/AgencyInfo";
import { useNavigate } from 'react-router-dom';

const segments = [
    { key: '--select segment--', value: '' },
    { key: 'Sedan', value: 'SEDAN' },
    { key: 'Hatchback', value: 'HATCHBACK' },
    { key: 'SUV', value: 'SUV' },
    { key: 'MUV', value: 'MUV' },
    { key: 'Carvaan', value: 'CARVAAN' },
    { key: 'Mini Bus', value: 'MINI_BUS' },
    { key: 'Bus', value: 'BUS' },
    { key: 'Tempo Travellers', value: 'TEMPO_TRAVELLERS' },
]
const DriverOptions = [
    { key: 'With Driver', value: 'true' },
    { key: 'Without Driver', value: 'false' },
]
const initialValues = {
    "segment": "",
    "vehicleName": '',
    "passing": "",
    "vehicleNumber": "",
    "farePerKM": '',
    "withDriver": ''
}

const validationSchema = Yup.object({

    vehicleName: Yup.string().required(" *Required"),
    segment: Yup.string().required(" *Required"),
    passing: Yup.string().required(" *Required"),
    vehicleNumber: Yup.string().required(" *Required"),
    farePerKM: Yup.string().required(" *Required"),
    withDriver: Yup.string().required(" *Required"),


});


function RegisterVehicle() {
    const navigate=useNavigate();
    const [file, setFile] = useState("");
    const [selectedImages, setSelectedImages] = useState([]);
    const handleupload = () => {
        document.getElementById("file").click();
    }

    const onSelectFile = (event) => {
        const selectedFiles = event.target.files;
        const selectedFilesArray = Array.from(selectedFiles);

        const imagesArray = selectedFilesArray.map((file) => {
            return URL.createObjectURL(file);
        });

        setSelectedImages((previousImages) => previousImages.concat(imagesArray));

        event.target.value = "";
    };


    const onSubmit = (values, onSubmitProps) => {
        console.log("form values-->", values);
        const tourist = values;
        const formData = new FormData();
        formData.append('file', file)
        formData.append('jsondata', JSON.stringify(tourist))
        axios({
            method: 'post',
            url: 'http://localhost:8080/api/vehicle/'+agency.getId(),
            data: formData,
            header: {
                // 'Authorization': `Bearer ${user.jwt}` ,
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',

            },
        })
            .then(response => {
                console.log("vehicle added successfully", response.values);
                navigate('/agencydash');
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
                    <div className='bkveh'>
                    <div  className='row' style={{marginBottom:'50px'}}>
                        <Navbar />
                        <br /><br />
                        <br /><br />
                        <div className='col-md-4'>
                                </div>
                                    {/* <ImageUp /> */}
                     <div className='col-md-6'>
                        <Form >
                            <div className="container" >

                                <button className='btn btn-secondary' > Back</button>
                                <br /><br />
                                    <div className="upload">

                                        <p className='uploadbtn' onClick={handleupload}>
                                            <img src={noprofile} width={100} height={100} alt />
                                            Upload Image
                                        </p>
                                        <input type="file" id="file" onClick={onSelectFile} onChange={(e) => setFile(e.target.files[0])} />
                                    </div>
                                    <div>
                                        {selectedImages.length == 1 ? "" : ""}
                                    </div>
                                    <div className="flex">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" style={{ height: '37px' }}>
                                                <i className="fa fa-car fa-fw " style={{ color: "#93C274" }} />
                                            </span></div>

                                        <FormikControl
                                            control="input"
                                            label="Enter Name"
                                            name="vehicleName"
                                            iclass="myinput"

                                        />
                                    </div>
                                    <div className="flex">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" style={{ height: '37px' }}>
                                                <i className="fa fa-car fa-fw " style={{ color: "#93C274" }} />
                                            </span></div>

                                        <FormikControl
                                            control="select"
                                            label="Select Segment"
                                            name="segment"
                                            options={segments}

                                        />
                                    </div>
                                    <div className="flex" >
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" style={{ height: '37px', }}>
                                                {/* <span className="input-group-text, mform-control" style={{}}> */}

                                                <i
                                                    className="fa fa-map-pin fa-fw "
                                                    style={{ color: "black" }}
                                                />
                                            </span></div>
                                        <FormikControl
                                            control="input"
                                            type="text"
                                            label="Passing State"
                                            name="passing"
                                            iclass="myinput"
                                        />
                                    </div>

                                    <div className="flex" >
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" style={{ height: '37px', }}>
                                                {/* <span className="input-group-text, mform-control" style={{}}> */}

                                                <i
                                                    className="fa-sort-numeric-desc fa-fw"
                                                    style={{ color: "red" }}
                                                />
                                            </span></div>
                                        <FormikControl
                                            control="input"
                                            type="text"
                                            label="Vehicle Number"
                                            name="vehicleNumber"
                                            iclass="myinput"
                                        />
                                    </div>

                                    {/* <p style={{ color: "yellow" }}>Password Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character</p> */}

                                    <div className="flex">
                                        {/* <span className="input-group-text, mform-control"> */}

                                        <div className="input-group-prepend">
                                            <span className="input-group-text" style={{ height: '37px' }}>

                                                <i
                                                    className="fa fa-inr fa-fw"
                                                    style={{ color: "black" }}
                                                />
                                            </span></div>
                                        <FormikControl
                                            control="input"
                                            type="Number"
                                            label="Fare Per KM"
                                            name="farePerKM"
                                            iclass="myinput"
                                        /></div>
                                    <div className="flex" >
                                        {/* <span className="input-group-text, mform-control" style={{}}> */}

                                        <div className="input-group-prepend">
                                            <span className="input-group-text" style={{ height: '37px', }}>

                                                <i
                                                    className="fa fa-id-card-o fa-fw "
                                                    style={{ color: "red" }}
                                                />
                                            </span></div>
                                        <FormikControl
                                            control="select"
                                            label="With/Without Driver"
                                            name="withDriver"
                                            options={DriverOptions}

                                        />

                                    </div>
                                    <div style={{marginBottom:"25px"}}>
                                <button type="reset" className="mybutton">Reset</button>

                                <button type="submit" className="mybutton" style={{ marginLeft: "60px" }}>Submit</button></div>
                                </div></Form>
                        </div>
                    </div></div>
                );
            }}
        </Formik>
    )
}

export default RegisterVehicle
