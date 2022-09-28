import React from 'react'
import axios from 'axios';
import { useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from '../Navbar';
import user from "../../context/UserInfo";

import './SearchList.css'
import Swal from 'sweetalert2';

function SearchList() {
    const location = useLocation();
    
     const plist=JSON.parse(sessionStorage.getItem('search'));
     if(plist==null|| plist==undefined){
      console.log("nullll........")
      return;
    } 
    // let plist=[]
    console.log(plist)
    // if(plist.length==0){
    //  const pkgs=<h2>No Packages available...</h2>
    // }else{
const pkgs =plist.map( (element)=>{ 
  var base64Image=`data:image/jpg;base64,${element.images}`;
  return(
<div>
    {/* Card Start */}
    <div className="card">
      <div className="row ">
      <div className="col-md-5">
      <div className="carousel-item active">
                <img
                  className="d-block"
                  src={base64Image}
                  style={{width:'400px', height:'300px'}}
                />
              </div>
        </div>
        <div className="col-md-6 px-1">
          <div className="card-block px-6">
            <h4 className="card-title">
              {element.pkgName}
            </h4>
            <h5 className="card-title">
              {element.agency.agencyName}
            </h5>
            <p className="card-text">
            {element.description}
            </p>
            <p className="card-text">
            <p >Destination: <span style={{color:'Green', fontWeight:'bold', fontSize:'20px'}}>{element.destination}</span></p>
              <p>Starting Point: <span  style={{color:'orange'}}>{element.startPoint}</span> </p>
               <p>Ticket: {element.ticketCost}, Discount: {element.discount}%</p>
               <p>Start Date: {element.startDate}, Duration: {element.noOfDays} days, {element.noOfDays-1} nights</p>
               <p>Available Seats: {element.emptySeats}</p>
              
            </p>
            <br />
            {/* <a href="#" className="mt-auto btn btn-primary  ">
              Book Now
            </a> */}
          </div>
        </div>
      </div>

            <a  className="mt-auto btn btn-primary " onClick={(e)=>handleBooking(e, element.pkgId)}>
              Book Now
            </a>
    </div>
  </div>


  )

})
//}

const navigate = useNavigate()
const handleBooking =async(e, id)=>{
  if(user.IsLoggedIn() && user.IsTourist()) {
  console.log(id)
  await axios.get("http://localhost:8080/api/package/"+id)
  .then(res=>{
      sessionStorage.setItem('booking', JSON.stringify(res.data));
      console.log(res.data);
      navigate("/pastpkgs");
  }).catch((err)=>{console.log(err);});
  // sessionStorage.setItem('booking',)
  navigate('/bookingform')}
  else{
    Swal.fire({
      title: 'You are not logged in..',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Login',
      denyButtonText: `Register As Tourist`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        navigate('/login')
        // Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        navigate('/register1')
        // Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }
  
}
  return (
    <div>
      <Navbar/>
      <br/><br />
  <div className='row'>
    <div className='col-md-12'>
    <div className="container py-3">
    {/* <div className="title h1 text-center"> Available Packages</div> */}
    {pkgs}
    </div>
    </div>
  </div>
      
</div>
  )
}

export default SearchList

// export default function App() {
//   return (
    
//   );
// }