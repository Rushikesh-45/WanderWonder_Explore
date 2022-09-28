import React, { useState } from 'react'
import { useEffect } from 'react';
import './css/home.css';
import video from './css/images/vid-4.mp4'
import video2 from './css/images/vid-1.mp4'
import video3 from './css/images/vid-2.mp4'
import video4 from './css/images/vid-3.mp4'
import FormikControl from './FormikControl';
import {Formik, Form } from 'formik';
import { useNavigate } from "react-router-dom"; 
import packageService from "../services/package.service";
import Navbar from './Navbar';
import HomeSlider from './HomeSlider';

// var vdo= document .getElementById('vdo');
// var videos = new Array(video, video2, video3, video4);
// var length = videos.length;
// var i=0;
// function slider(){
//   if(i>length-1){
//     i=0;
//   } 
//   vdo.src = videos[i];
//   i++;
//   setTimeout('slider()', 3000);
// }
        
const videos=[video, video2, video3, video4];

const initialValues = {
  destination:'',
  startPoint:'',
  startDate:'',
  travellers:'',
}
function Home() {
  const [value, setValue]= useState(0);
  const navigate = useNavigate();

 
useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => {
        return v == 3 ? 0 : v + 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [value]);
  

 
  const onSubmit = (values) => {
    console.log(values);
    // const data=values.json();
    packageService.search(values)
    . then(response => {
      console.log(response.data[0].destination);
      sessionStorage.setItem('search', JSON.stringify(response.data));
      navigate("/pkglist",{state:response.data});
  })
  .catch(error => {
      console.log('something went wroing', error);
      
  })
  }
  return (
    <>
     <Navbar /><br/><br/>
    <HomeSlider/>



    <div className='controls' >
    <video className="bg-video" autoPlay loop  muted playsInline  >
      <source src={videos[value]} type="video/mp4"  id='vdo'/>
    </video>
   
    </div>
        <div className='content'>Discover A new Place</div>
      <div className="subcontent"> 
        Find great places to stay, eat, shop, or visit from local experts
      </div>



      <Formik
      initialValues={initialValues}
      // validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
{(formik) => {
        return (
      <Form className="search" method='get' >
       
          <div className="mycontainer">
            <label htmlFor="" className='homelabel' style={{marginTop:'25px'}}>From </label>
            {/* <input type="text" placeholder="Search Your location" className='homeinput' /> */}
            <FormikControl control='input' type="text" placeholder="Search Your location" name='startPoint' iclass='homeinput' style={{width:'200px'}}/>
          </div>
          <div className="mycontainer">
            <label htmlFor="" className='homelabel' style={{marginTop:'25px'}}>Where </label>
            <FormikControl control='input' type="text" placeholder="Search Your location" name='destination' iclass='homeinput'/>
                

                {/*   <FormikControl
                  control="input"
                  type="email"
                  label="Email"
                  name="email"
                  style={{ width: "300px" }}
                /> */}
          </div>
          <div className="mycontainer">
            <label htmlFor="" className='homelabel'>When</label>
            {/* <input type="date" className='homeinput' style={{width:'200px'}}/> */}
            <FormikControl control='date' type="date" label="yyyy-MM-dd" name='startDate' iclass='homeinput'/>
            
          </div>
          <div className="mycontainer">
            <label htmlFor="" className='homelabel' style={{marginTop:'25px'}}>Travellers</label>
            {/* <input type="number" placeholder="Travellers" className='homeinput' style={{width:'200px'}}/> */}
            <FormikControl control='input' type="number" placeholder="Travellers" name='travellers' iclass='homeinput'/>

          </div>
          <div>
          <button className='homebtn' type='submit'>Search</button>
        </div></Form>
        ) }}
        </Formik>


    </>
  )
}

export default Home