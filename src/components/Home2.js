import React from 'react'
import video from './css/images/vid-4.mp4'
import Footer from './Footer'
import Header from './Header/Header'
import HomeCards from './HomeCards'
import Navbar from './Navbar'
import StripRET from './StripRET'
import ZigZag from './ZigZag'


function Home2() {
  return (
    <>
    <Navbar/>
      <br/><br/>
    
    <div className='controls' >
    <video className="bg-video" autoPlay loop  muted playsInline  >
      <source src={video} type="video/mp4"  id='vdo'/>
    </video>
   
    </div>
        <div className='content'>Work, Travel, Save, Repeat</div>
      <div className="subcontent"> 
      Travel makes one modest. You see what a tiny place you occupy in the world.
      </div>
    <Header />
{/* <HomeCards/> */}
<StripRET/>
<br/><br />
<ZigZag/>
<br/><br /><br/><br />
{/* <Footer/> */}
    </>
  )
}

export default Home2
