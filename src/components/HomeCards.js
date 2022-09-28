import React from 'react'
import image1 from './css/images/destination-1.jpg'
import image2 from './css/images/bg_111.jpeg'
import image3 from './css/images/destination-3.jpg'

function HomeCards() {
  return (
    <>
    

<div className="col-md-10" style={{marginLeft:'130px'}}>
    <p style={{fontFamily:'red serif', fontSize:'45px', fontWeight:'bolder', marginLeft:'350px'}}>See our latest vacation ideas</p>
      <div className="card-deck">
  <div className="card">
    <img src={image1} className="card-img-top" style={{height:'350px', width:'500px'}} />
    
    <div className="card-footer">
      <h3 className="text-muted" style={{fontFamily:'san-serif', fontWeight:'bolder', fontSize:'40px'}}>Beachfront Scape</h3>
    </div>
  </div>
  <div className="card">
    <img src={image2} className="card-img-top" style={{height:'350px', width:'500px'}} />
    
    <div className="card-footer">
      <h3 className="text-muted" style={{fontFamily:'san-serif', fontWeight:'bolder', fontSize:'40px'}}>Group Holidays</h3>
    </div>
  </div>
  <div className="card" style={{ width:'300px'}} >
    <img src={image3} className="card-img-top" style={{height:'350px', width:'500px'}} />
    
    <div className="card-footer">
      <h3 className="text-muted" style={{fontFamily:'san-serif', fontWeight:'bolder', fontSize:'40px'}}>City Breaks</h3>
    </div>
  </div>
</div></div>


    </>
  )
}

export default HomeCards
