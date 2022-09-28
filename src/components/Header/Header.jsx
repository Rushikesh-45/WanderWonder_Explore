import React, { useState } from "react";
import "./header.css";
import {faCalendarDays, faPerson, faPlaneDeparture, faPlaneArrival} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import packageService from "../../services/package.service";
import FormikControl from '../FormikControl';
import {Formik, Form } from 'formik';
import * as Yup from "yup";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const initialValues = {
  destination:'',
  startPoint:'',
  startDate:'',
  // noOfSeats:'',
}
const validationSchema = Yup.object({
  destination: Yup.string().required(" *required"),
   startDate: Yup.date().min(new Date(),'Please choose future date').required(" *required"),
  startPoint: Yup.string().required(" *required"),
  // noOfSeats: Yup.string().required(" *required"),
});
const Header = () => {

  const onSubmit = (values) => {
    console.log(values);
    // const data=values.json();
    packageService.search(values)
    . then(response => {
      // console.log(response.data[0].destination);
      if(response.data==null || response.data.length==0 || response.data==undefined) {
        Swal.fire(' Sorry..!! Currently no Packages available...')

        return;
      }
      sessionStorage.setItem('totalSeats', values.noOfSeats);
      sessionStorage.setItem('search', JSON.stringify(response.data));
      navigate("/pkglist",{state:response.data});
  })
  .catch(error => {
      console.log('something went wroing', error);
      
  })
  }

  const navigate = useNavigate();

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0 so need to add 1 to make it 1!
var yyyy = today.getFullYear();
if(dd<10){
  dd='0'+dd
} 
if(mm<10){
  mm='0'+mm
} 

today = yyyy+'-'+mm+'-'+dd;
console.log(today);
// document.getElementById("datefield").setAttribute("mindate", today);
  return (
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}>
      {(formik) => {
   return (
    <Form>
    <div className="header">
      <div className="headerContainer">
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPlaneDeparture} className="headerIcon" />
            <FormikControl control='input' type="text" label="Departure" name='startPoint' iclass='headerSearchInput' style={{marginTop:'25px'}}/>

          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPlaneArrival} className="headerIcon" />
            <FormikControl control='input' type="text" label="Destination" name='destination' iclass='headerSearchInput' style={{marginTop:'25px'}} />
           
          </div>

          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <FormikControl control='date' type="text" label="yyyy-MM-dd" mindate={today} name='startDate' id='datefield' iclass='headerSearchInput'/>

          </div>
          {/* <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span className="headerSearchText"> Travellers</span>
            <div className="">
              <div className="optionCounter">
       
            <FormikControl control='input' type="number" label="Travellers" name='noOfSeats' iclass='headerSearchInput' style={{width:'80px',height: '25px', marginTop: '30px'}} />

              </div>
            </div>
          </div> */}
          <div className="headerSearchItem">
            <button className="headerBtn">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
    </Form> )}}
</Formik>
  );
};

export default Header;
