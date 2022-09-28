import React from 'react'
import Navbar from '../Navbar'
import booking from '../../context/BookingInfo';
import img from '../css/images/agency1.jpg'
import bg from '../css/images/logo.png'
import Swal from 'sweetalert2';
import './bookingform.css';
import { useState } from 'react';
import {  useNavigate } from "react-router-dom";
import user from "../../context/UserInfo";
import img22 from '../css/images/g-4.jpg'

// import user from 
function BookingForm() {
  const [seats, setSeats]=useState(0);
 
// const seats=sessionStorage.getItem('totalSeats')
const paymentStart=()=>{
  // let amt= document.getElementById(pay).value;  //$("#pay").val();
  let amt=booking.getTicket()*10;

  console.log(amt)
  $.ajax({
    url:'http://localhost:8080/api/booking/payment',
    data:JSON.stringify({amount: amt, tId: user.getId(), pkgId: booking.getPkgId(), seats:seats}),
    type: 'POST',
    dataType: 'json',
    contentType:"application/json",
    success: function(response){
      console.log(response);
      if(response.status=='created'){
        let options={
          key:'rzp_test_1yM3CEVq2bqS9n',
          amount:response.amount,
          currency:'INR',
          name:'Happy Journey',
          description:'Ticket Amount',
          image:img,
          order_id:response.id,
          handler:function(response){
            console.log(response.razorpay_payment_id)
            console.log("payment successful")
            Swal.fire({
              title: 'Payment successful',
              showDenyButton: true,
              // showCancelButton: true,
              confirmButtonText: 'Profile',
              denyButtonText: `Go to Home`,
            }).then((result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
                navigate('/userdash')
                // Swal.fire('Saved!', '', 'success')
              } else if (result.isDenied) {
                navigate('/home')
                // Swal.fire('Changes are not saved', '', 'info')
              }
            })
          },
          "prefill": {
            "name": "Gaurav Kumar",
            "email": "gaurav.kumar@example.com",
            "contact": "9999999999"
            },
            "notes": {
            "address": "Razorpay Corporate Office"
            
            },
            "theme": {
            "color": "#3399cc"
            }
        }
        let rzp1= new Razorpay(options);
        rzp1.on('payment.failed', function (response){
          console.log(response.error.code);
          console.log(response.error.description);
          console.log(response.error.source);
          console.log(response.error.step);
          console.log(response.error.reason);
          console.log(response.error.metadata.order_id);
          console.log(response.error.metadata.payment_id);
         new Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'payment failed!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
          });
          rzp1.open();
      }

    },error:function(error){
      console.log(error);
      alert('Error');
    }
  }
    )

} 

const navigate = useNavigate();

  // const booking=JSON.parse(sessionStorage.get('booking'));
  return (
    <div style={{height:'1000px'}}>
<Navbar/>
<h2 style={{marginLeft:'500px', marginTop:'100px'}}> Confirm Checkout </h2>
<div className='bg'>
<table className="table table-borderless, container" style={{marginLeft:'200px', marginTop:'80px'}}>
  <thead>
    <tr>
      <th scope="col">Departure Date</th>
      <th scope="col">{booking.getDate()}</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <th scope="row">Destination</th>
      <td>{booking.getDestination()}</td>
      
    </tr>
    <tr>
      <th scope="row">Departure</th>
      <td>{booking.getStart()}</td>
      
    </tr>
    <tr>
      <th scope="row">Travel Agency</th>
      <td>{booking.getAgency()}</td>
      
    </tr>
    <tr>
      <th scope="row">Total Travellers</th>
      <td>
        <input type="number" name="seats" placeholder='please enter no. of seats' onBlur={(e)=>setSeats(e.target.value)}></input>
      </td>
      
    </tr>
    <tr>
      <th scope="row">Ticket per head</th>
      <td>Rs. {booking.getTicket()}</td>
    </tr>
    <tr>
      <th scope="row">Total </th>
      <td style={{fontSize:'25px', fontWeight:'bold'}} id='pay'>Rs. {booking.getTicket()*seats}</td>
    </tr>
    <tr>
      <th scope="row">Contact for more details </th>
      <td style={{ fontWeight:'bold'}} id='pay'> {booking.getAgencyMob()}</td>
    </tr>
    <tr>
      <th scope="row" colSpan={2}><br/><br/>
         <button className='btn btn-primary' style={{width:'1000px'}} onClick={paymentStart}>Pay Now </button> <br/><br/>
         <button className='btn btn-danger' style={{width:'1000px'}}>Cancel</button> 
        </th>
    </tr>
    </tbody>
      </table>
    </div>
    </div>
  )
}

export default BookingForm
