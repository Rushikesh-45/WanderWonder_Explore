import React from 'react'
import Sidebar from './Sidebar'

function AgencyTable() {

    const agencies = JSON.parse(sessionStorage.getItem('allagencies'));
    const list = agencies.map((a, i) => {
      return (
        <tr>
          <th scope="row">{i+1}</th>
          <td>{a.agencyId}</td>
          <th scope="row">{a.agencyName}</th>
          <td>{a.email}</td>
          <td>{a.mobNumber}</td>
          <td>{a.city}</td>
          <td>{a.licenceNo}</td>
          <td>{a.isDeleted}</td>
          <td>
            <button className='btn btn-primary'>View</button>  
            <button className='btn btn-danger' style={{marginLeft:'10px'}}>Delete</button>  
            </td>
        </tr>
  )})
 return (
    <>
    <Sidebar/>
    <table className="table table-striped table-hover, container">
        <thead>
          <tr>
            {/*  user_id | dob        | email           | full_name | gender | is_deleted             | mob_number | password */}
            <th scope="col">Sr. No.</th>
            <th scope="col">Agency ID</th>
            <th scope="col">Agency Name</th>
            <th scope="col">Email-id</th>
            <th scope="col">Mobile No.</th>
            <th scope="col">Location</th>
            <th scope="col">Licence No.</th>
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

export default AgencyTable
