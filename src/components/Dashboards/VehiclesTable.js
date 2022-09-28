import React from 'react'
import Sidebar from './Sidebar';

function VehiclesTable() {
    const vehicles = JSON.parse(sessionStorage.getItem('allvehicles'));
    if(vehicles==null|| vehicles==undefined){
      console.log("nullll........")
      return;
    } 
    const list = vehicles.map((a, i) => {
      return (
       
 
        <tr>
          <th scope="row">{i+1}</th>
          <td>{a.vehicleId}</td>
          <th scope="row">{a.segment}</th>
          <td>{a.passing}</td>
          <td>{a.vehicleNumber}</td>
          <td>Rs. {a.farePerKM}/-</td>
          <td>{a.agency.agencyName}</td>
          <td>{a.booked}</td>
          <td>{a.published}</td>
          <td>{a.deleted}</td>
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
            <th scope="col">Sr. No.</th>
            <th scope="col">Vehicle ID</th>
            <th scope="col">Segment</th>
            <th scope="col">Passing</th>
            <th scope="col">Cost /KM</th>
            <th scope="col">Agency</th>
            <th scope="col">Is Booked</th>
            <th scope="col">Is Published</th>
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

export default VehiclesTable
