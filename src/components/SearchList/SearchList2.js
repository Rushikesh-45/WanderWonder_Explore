import React, { useState, useEffect } from "react";
import styled from "styled-components";
import user from "../../context/UserInfo";

import info1 from "../css/images/g-1.jpg";
import info2 from "../css/images/g-1.jpg";
import info3 from "../css/images/g-1.jpg";
import Navbar from "../Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function SearchList2() {
  const navigate = useNavigate();
const [sdest, setSdest]= useState("");



const viewDeatails=async(e,id)=>{
  e.preventDefault();
  await axios.get("http://localhost:8080/api/package/"+id)
    .then(res=>{
        sessionStorage.setItem('pkgdetail', JSON.stringify(res.data));
        console.log(res.data);
      const res2=axios.get("http://localhost:8080/api/package/img/"+id);

        navigate(`/pkgdetails`,{state:{data:id}});
    }).catch((err)=>{console.log(err);});
}

const handleCategory=async(e, pkg)=>{
  e.preventDefault();
  console.log(pkg)
  if(pkg=='ALL'){
    await axios.get("http://localhost:8080/api/package/")
      .then(res=>{
          sessionStorage.setItem('categPkg', JSON.stringify(res.data));
          console.log(res.data);
          navigate(`/categorypkg`);
      }).catch((err)=>{console.log(err);});
    navigate('/packages');
  }else{

    await axios.get("http://localhost:8080/api/package/category/"+pkg)
      .then(res=>{
          sessionStorage.setItem('categPkg', JSON.stringify(res.data));
          console.log(res.data);
          navigate(`/categorypkg`);
      }).catch((err)=>{console.log(err);});
  }
}


  const packages = [
    "ALL",
    "ADVENTURE",
    "ECO",
    "WILDLIFE",
    "BEACH",
    "MEDICAL"
  ];
  const pkgs = JSON.parse(sessionStorage.getItem('allpkgs'));
  if(pkgs==null|| pkgs==undefined){
    console.log("nullll........")
    return;
  } 
  const [active, setActive] = useState(1);
  return (
    <Section id="recommend">
      <Navbar/>
      <div className="title">
        <br/>
        <h2>Choose Your Destiny</h2>
      </div>
      <div className="packages">
        <ul >
          {packages.map((pkg, index) => {
            return (
              <li onClick={(e)=>handleCategory(e, pkg)}>

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
        <input type="text" className="myinput" placeholder="Search Your destination" style={{marginLeft:'1100px', marginBottom:'20px'}} onChange={(e)=>{setSdest(e.target.value)}}></input>
      <div className="destinations">
        {pkgs.filter((v)=>{
          if(sdest==""){
            return v;
          }else if(v.destination.toLowerCase().includes(sdest.toLowerCase())){
            return v;
          }
        })
        .map((p) => {
           var base64Image=`data:image/jpg;base64,${p.images}`;
          return (
            <div className="destination" onClick={(e)=>viewDeatails(e, p.pkgId)}>
              <img src={base64Image} alt="" />
              <h1>{p.title}</h1>
              <h3>{p.destination}</h3>
              <p>{p.description}</p>
              <div className="info">
                <div className="services">
                  <img src={info1} alt="" />
                  <img src={info2} alt="" />
                  <img src={info3} alt="" />
                </div>
                <h4>{p.ticketCost}</h4>
              </div>
              <div className="distance">
                <span> From {p.startPoint}</span>
                <span>{p.noOfDays} days {p.noOfDays-1} nights</span>
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
