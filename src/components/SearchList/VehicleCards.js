import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import info1 from "../css/images/g-1.jpg";
import info2 from "../css/images/g-1.jpg";
import info3 from "../css/images/g-1.jpg";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";

export default function VehicleCards() {
  const navigate=useNavigate();

  const packages = [
    "ALL",
    "SUV",
    "SEDAN",
    "HATCHBACK",
    "TRAVELLERS",
    "CARVAAN",
    "MINI_BUS"
  ];
  const vehicles = JSON.parse(sessionStorage.getItem('allvehicles'));
  if(vehicles==null|| vehicles==undefined){
    console.log("nullll........")
    return;
  } 

  const handleSegment=async(e, pkg)=>{
    e.preventDefault();
    console.log(pkg)
    if(pkg=='ALL'){
      await axios.get("http://localhost:8080/api/vehicle/")
        .then(res=>{
            sessionStorage.setItem('segVeh', JSON.stringify(res.data));
            console.log(res.data);
            navigate(`/segmentveh`);
        }).catch((err)=>{console.log(err);});
      navigate('/vehicles');
    }else{
  
      await axios.get("http://localhost:8080/api/vehicle/segment/"+pkg)
        .then(res=>{
            sessionStorage.setItem('segVeh', JSON.stringify(res.data));
            console.log(res.data);
            navigate(`/segmentveh`);
        }).catch((err)=>{console.log(err);});
    }
  }


  const [active, setActive] = useState(1);
  return (
    <Section id="recommend">
      <Navbar/>
      <div className="title">
        <br/>
        <h2>Choose Your Companion</h2>
      </div>
      <div className="packages">
        <ul>
          {packages.map((pkg, index) => {
            return (
              <li onClick={(e)=>handleSegment(e, pkg)}>

              <p
                className={active === index + 1 ? "active" : ""}
                onClick={() => setActive(index + 1)
                }
              >{pkg}
                
              </p>
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
                  <img src={info1} alt="" />
                  <img src={info2} alt="" />
                  <img src={info3} alt="" />
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
