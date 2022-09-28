import React from 'react'
import './css/RegisterAs.css'
import iii from './css/images/about.jpg';
import Navbar from './Navbar';

function RegisterAs() {
 
//  const left = document.querySelector(".left");
// const right = document.querySelector(".right");
// const mcontainer = document.querySelector(".mcontainer");

// left.addEventListener("mouseenter", () => {
//   mcontainer.classList.add("hover-left");
// });

// left.addEventListener("mouseleave", () => {
//   mcontainer.classList.remove("hover-left");
// });


// right.addEventListener("mouseenter", () => {
//   mcontainer.classList.add("hover-right");
// });

// right.addEventListener("mouseleave", () => {
//   mcontainer.classList.remove("hover-right");
// });
    return (
    <div>
        <Navbar/>
<div className="mcontainer" style={{height:'1200px'}}>
  <div className="split left">
    <h1>Tourist</h1>
    <a href="/register1" className="mmbutton">
      Register
    </a>
  </div>
  <div className="split right">
    <h1>Travel Agency</h1>
    <a href="/register2" className="mmbutton">
      Register
    </a>
  </div>
</div>


    </div>
  )
}

export default RegisterAs
