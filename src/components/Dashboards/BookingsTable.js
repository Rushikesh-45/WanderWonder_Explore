import React from 'react'
import Sidebar from './Sidebar';
function BookingsTable() {

  const bookings = JSON.parse(sessionStorage.getItem('allbookings'));
  if(bookings==null|| bookings==undefined){
    console.log("nullll........")
    return;
  } 
  const list = bookings.map((t, i) => {
    return (
      
      <tr>
        <th scope="row">{i+1}</th>
        <td>{t.bookingId}</td>
        <th scope="row">{t.pkg.pkgId}</th>
        <td>{t.pkg.agency.agencyId}</td>
        <td>{t.tourist.userId}</td>
        <td>{t.bookingDate}</td>
        <td>Rs.{t.bookingAmount}/-</td>
        <td>{t.isCanceled}</td>
        <td>{t.isDeleted}</td>
        <td>
          <button className='btn btn-primary'>View</button>  
          <button className='btn btn-danger' style={{marginLeft:'10px'}}>Delete</button>  
          </td>
      </tr>

    )
  })

  return (
    <>
    <Sidebar/>
      <table className="table table-striped table-hover, container">
        <thead>
          <tr>
            {/*  user_id | dob        | email           | full_name | gender | is_deleted             | mob_number | password */}
            <th scope="col">Sr. No.</th>
            <th scope="col">Booking Id</th>
            <th scope="col">Package Id</th>
            <th scope="col">Agency Id</th>
            <th scope="col">Tourist Id</th>
            <th scope="col">Booking Date</th>
            <th scope="col">Booking Amount</th>
            <th scope="col">Is Canceled</th>
            <th scope="col">Is Deleted</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        
          {list}
        
      </tbody>
    </table>
    </>
  )
}

export default BookingsTable
