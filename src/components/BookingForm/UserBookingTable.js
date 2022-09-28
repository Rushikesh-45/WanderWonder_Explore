import React from 'react'
import Navbar from '../Navbar';
import { useNavigate } from 'react-router-dom';
// import Sidebar from './Sidebar';
function UserBookingTable() {
const navigate = useNavigate();
  const bookings = JSON.parse(sessionStorage.getItem('userbookings'));
  if(bookings==null|| bookings==undefined || bookings=="" ){
    console.log("nullll........")
    
    return;
  } 
  const list = bookings.map((t, i) => {
    return (

      
      <tr>
        <th scope="row">{i+1}</th>
        <td>{t.bookingId}</td>
        <td>{t.bookingDate}</td>
        <th scope="row">{t.destination}</th>
        <td>Rs. {t.bookingAmount}/-</td>
        <td>{t.noOfSeatsBooked}</td>
        <td>{t.startPoint}</td>
        <td>{t.agencyName}</td>

      </tr>

    )
  })

  return (
    <>
    <Navbar/>
    <br/><br />
    <br/><br />
    <button onClick={()=>navigate(-1)} className='btn btn-secondary'>Back </button>
      <table className="table table-striped table-hover, container">
        <thead>
          <tr>
            {/*  user_id | dob        | email           | full_name | gender | is_deleted             | mob_number | password */}
            <th scope="col">Sr. No.</th>
            <th scope="col">Booking Id</th>
            <th scope="col">Booking Date</th>
            <th scope="col">Destination</th>
            <th scope="col">Booking Amount</th>
            <th scope="col">No. Of Seats</th>
            <th scope="col">From</th>
            <th scope="col">Agency Name</th>
          </tr>
        </thead>
        <tbody>
        
          {list}
        
      </tbody>
    </table>
    </>
  )
}

export default UserBookingTable
