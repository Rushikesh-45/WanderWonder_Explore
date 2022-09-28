import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from '../Navbar';
import './SearchList.css'
function Upcoming() {
    let plist=JSON.parse(sessionStorage.getItem('pkgslist'));
console.log("upcoming---",plist)
// if(plist=null){
//   pkgs=<h2>No Packages available...</h2>
// }else{
const pkgs =plist.map( (element)=>{ 
  return(
<div>
    {/* Card Start */}
    <div className="card">
      <div className="row ">
      <div className="col-md-5">
      <div className="carousel-item active">
                <img
                  className="d-block"
                  src="https://picsum.photos/450/300?image=1072"
                  alt
                />
              </div>
        </div>
        <div className="col-md-6 px-1">
          <div className="card-block px-6">
            <h4 className="card-title">
              Available Packages
            </h4>
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
            <a  className="mt-auto btn btn-primary " onClick={(e)=>handleBooking(e, element.pkgId)}>
              Edit
            </a>
            <a  className="mt-auto btn btn-danger " onClick={(e)=>handleBooking(e, element.pkgId)} style={{marginLeft:'50px'}}>
              Delete
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>


  )

})
// }
  return (
    <>
      <Navbar/>
        <div className='container'>
    
    {pkgs}
  </div>
      
    </>
  )
}

export default Upcoming
