import React from 'react'
import Sidebar from './Sidebar';
function TouristTable() {

  const tourist = JSON.parse(sessionStorage.getItem('alltourists'));
  if(tourist==null|| tourist==undefined){
    console.log("nullll........")
    return;
  } 
  const list = tourist.map((t, i) => {
    return (
      <tr>
        <th scope="row">{i+1}</th>
        <td>{t.userId}</td>
        <th scope="row">{t.fullName}</th>
        <td>{t.email}</td>
        <td>{t.mobNumber}</td>
        <td>{t.location}</td>
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
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email-id</th>
            <th scope="col">Mobile No.</th>
            <th scope="col">Location</th>
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

export default TouristTable
