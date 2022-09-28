import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Navbar from "../Navbar";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function Vehicles() {
const navigate = useNavigate();

    const handleDelete =async (e, id)=>{
        e.preventDefault();
        console.log("delete",id);
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
             axios.delete('http://localhost:8080/api/vehicle/'+id)
            navigate(-1);
            Swal.fire(
              'Deleted!',
              'Your vehicle has been deleted.',
              'success'
            )
          }
        })
        
        console.log("delete")
      }
      const handleEdit =async (e, id)=>{
        e.preventDefault();
      await axios.put('http://localhost:8080/api/package/'+id).
          then((response)=>{
      
          }).catch((err)=>{console.log(err);});
      }



  const packages = [
    "The Weekend Break",
    "The Package Holiday",
    "The Group Tour",
    "Long Term Slow Travel",
  ];
  const vehicles = JSON.parse(sessionStorage.getItem('allagencyvehicles'));
  if(vehicles==null|| vehicles==undefined){
    console.log("nullll........")
    return;
  } 
  const [active, setActive] = useState(1);
  return (
    <Section id="recommend" onClick={()=>{
        console.log(" clicked")
    }}>
      <Navbar/>
      <div className="title">
        <br/>
        <h2>Choose Your Destiny</h2>
      </div>
      <div className="packages">
        <ul>
          {packages.map((pkg, index) => {
            return (
              <li
                className={active === index + 1 ? "active" : ""}
                onClick={() => setActive(index + 1)}
              >
                {pkg}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="destinations" >
        {vehicles.map((p) => {
           var base64Image=`data:image/jpg;base64,${p.images}`;
          return (
            <div className="destination" onClick={()=>{
                console.log(p.segment)
              }}>
              <img src={base64Image} alt="" />
              <h3>{p.vehicleName}</h3>
              <p>{p.segment}</p>
              <p>IND {p.vehicleNumber}</p>
              <div className="info">
                <div className="services">
                    <button type="button" className="btn btn-warning" onClick={(e)=>handleEdit(e, p.vehicleId)}>Edit</button>
                    <button type="button" className="btn btn-danger" onClick={(e)=>handleDelete(e, p.vehicleId)}>Delete</button>
                
                </div>
                <h4>{p.farePerKM} per KM</h4>
              </div>
              <div className="distance">
                <span> From {p.agency.agencyName}</span>
                <span>{p.passing}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
