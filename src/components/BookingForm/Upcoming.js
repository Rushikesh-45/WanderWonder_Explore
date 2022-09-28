import React from 'react'
import Navbar from '../Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import Sidebar from './Sidebar';
function Upcoming() {

    const viewPackage=async(e, id)=>{
        e.preventDefault();
        await axios.get('http://localhost:8080/api/package/'+id)
        .then(res=>{
            sessionStorage.setItem('search', JSON.stringify(res.data));
            console.log(res.data);
            if(res.data==null||res.data==undefined || res.data==""){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'You Don`t have any upcoming bookings ..!!',
                    footer: '<a href="">Why do I have this issue?</a>'
                  })
                  navigate(-1)
            }
            // navigate("/pastpkgs");
        }).catch((err)=>{console.log(err);});
        navigate('/pkgdetails')
    }


    const cancelbooking=async(e, id)=>{
        e.preventDefault();

        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                 axios.get('http://localhost:8080/api/booking/cancel_booking/'+id)
                .then(res=>{
                    console.log(res.data);
                    // navigate("/pastpkgs");
                }).catch((err)=>{console.log(err);});
                navigate(-1)
              Swal.fire('Canceled..!', '', 'success')
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          })

       
    }



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
        <th> {JSON.stringify(t.canceled).toUpperCase()}</th>
        <td>
            <button className='btn btn-primary' onClick={(e)=>viewPackage(e, t.pkgId)}>View</button>
            <button className='btn btn-danger' onClick={(e)=>cancelbooking(e, t.bookingId)}>Cancel</button>
        </td>

      </tr>

    )
  })

  return (
    <>
    <Navbar/>
    <br/><br />
    <br/><br />
    <div className='container'>
    <button onClick={()=>navigate(-1)} className='btn btn-secondary'>Back </button>
    <br/><br />
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
            <th scope="col">Is Canceled</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        
          {list}
        
      </tbody>
    </table></div>
    </>
  )
}

export default Upcoming
