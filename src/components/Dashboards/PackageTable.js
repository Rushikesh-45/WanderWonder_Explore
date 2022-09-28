import React from 'react'
import Sidebar from './Sidebar';

function PackageTable() {
    const pkgs = JSON.parse(sessionStorage.getItem('allpkgs'));
    if(pkgs==null|| pkgs==undefined){
      console.log("nullll........")
      return;
    } 
    const list = pkgs.map((a, i) => {
      return (
        <tr>
          <th scope="row">{i+1}</th>
          <td>{a.pkgId}</td>
          <th scope="row">{a.destination}</th>
          <td>{a.startPoint}</td>
          <td>{a.ticketCost}</td>
          <td>{a.startDate}</td>
          <td>{a.agency.agencyName}</td>
          <td>{a.published}</td>
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
            <th scope="col">Package ID</th>
            <th scope="col">Destination</th>
            <th scope="col">Starts at</th>
            <th scope="col">Ticket Cost</th>
            <th scope="col">Date</th>
            <th scope="col">Agency </th>
            <th scope="col">Is Published</th>
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

export default PackageTable
