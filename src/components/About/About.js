import React, { useState } from 'react'
import { useEffect } from 'react';
import './about.css';
import video from '../css/images/vid-2.mp4'
import photo from '../css/images/g-6.jpg'

import './about.css'
import Navbar from '../Navbar';
import Footer from '../Footer';
function About(){
    return(
        <div>
            <Navbar/>
            <br/><br/>


            <div className='controls1' >
                <video className="bg-video" autoPlay loop  muted playsInline  >
                <source src={video} type="video/mp4"  id='vdo'/>
                </video>            
            </div>

            
            <div className="content1">
            <h1>About Us</h1>
             </div>
            <br /><br /><br /><br />

            <section className="ftco-section">
            <div className="container0">
            <div className="row">
            <div className="col-md-4">
             <div className="intro">
                <h3>
                 <span>01</span> Travel
                </h3>
             <p>
             Travel opens your heart, broadens your mind, and fills your life with stories to tell.”
             </p>
             </div>
            </div>
            <div className="col-md-4">
             <div className="intro">
             <h3><span>02</span> Experience </h3>
             <p>Every destination you’ll visit leaves its own unique memory. As this travel quote says: Make memories all over the world!</p>
            </div>
            </div>
            <div className="col-md-4">
            <div className="intro">
             <h3>
            <span>03</span> Relax
             </h3>
            <p>
            It is not the destination where you end up but the mishaps and memories you create along the way.
             </p>
           </div>
             </div>
          </div>
             </div>
            </section>
            <section className="textImage">
                              
                    <div className="container01">
                        <div classNae="row">
                             <div className="col-sm-12 col-md-12">
                                 <img src={photo} alt="photo" />
                            </div>
                        </div>
                    </div>
                    <div className="container02">
                        <div classNae="row">
                             <div className="col-sm-12 col-md-12">
                             <h2 className="mb-4" style={{marginTop:'100px'}}>The Best Travel Agency</h2>
                             <p>
                                Wander-Wonder Tours & Travel Management System is an application will help in maintaining the 
                                operations performed related to sight-seeing and travelling. Most of the people in this world 
                                like to travel from one place to another no matter whether it is a small or large distance. 
                                Some people like to travel by train, flight, bus or by any other means of transport. The tours 
                                travel management system application is designed for the travel agency in which there is 
                                an option of searching a tour package and booking tour in order to reach the intended 
                                destination. Booking of package will be done with a great ease and without any difficulty. 
                                This will be one of the interesting projects that one can work on and implement in real time 
                                world. The user interface must be simple and easy to understand
                            </p>
                            </div>
                        </div>
                    </div>
            </section>
            <div style={{marginTop:'600px'}}>

            {/* <Footer/> */}
            </div>
        </div>
        
        
    )

}
export default About;