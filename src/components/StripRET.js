import React from 'react'
import image from './css/images/about.jpg'
import HomeCards from './HomeCards'

function StripRET() {
  return (
    <div>
  <section className="ftco-section bg-light" style={{height:'300px'}}>
    <br/><br/> <br /> <br />
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <div className="intro ftco-animate fadeInUp ftco-animated">
          <h3>
            <span>01</span> Travel
          </h3>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="intro ftco-animate fadeInUp ftco-animated">
          <h3>
            <span>02</span> Experience
          </h3>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="intro ftco-animate fadeInUp ftco-animated">
          <h3>
            <span>03</span> Relax
          </h3>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<br/><br/> <br /> <br/>
<HomeCards />
{/* ----------------------------------------------------------------------------------------------------------------------------- */}

<br/><br /> <br/>

<section className="ftco-about d-md-flex">
  <div className="row">
    {/* <div className="col-md-1"></div> */}
    <div className="col-md-7">
      <img src={image} className="img-responsive" style={{width:'800px', height:'600px'}}/>
    </div>
    <div className="col-md-4">
    <div className="one-half ftco-animate fadeInUp ftco-animated">
    <div className="heading-section ftco-animate fadeInUp ftco-animated">
      <h2 className="mb-4" style={{fontFamily:'Work Sans', fontSize:'60px', fontWeight:'bolder', color:'#666666'}}>The Best Travel Agency</h2>
    </div>
    <div style={{textAlign:'left', fontFamily:'poppins', fontSize:'20px', lineHeight:'1.8', fontWeight:'300', color:'#666666'}}>
      <p>
        On her way she met a copy. The copy warned the Little Blind Text, that
        where it came from it would have been rewritten a thousand times and
        everything that was left from its origin would be the word "and" and the
        Little Blind Text should turn around and return to its own, safe
        country. But nothing the copy said could convince her and so it didn’t
        take long until a few insidious Copy Writers ambushed her, made her
        drunk with Longe and Parole and dragged her into their agency, where
        they abused her for their.
      </p>
    </div>
  </div>
    </div>
  </div>
  
 
</section>
{/* ----------------------------------------------------------------------------------------------- */}
<br/><br/> <br />
;<section className="ftco-section services-section bg-light" style={{fontFamily:'sans-serif'}}>
  <br/><br/> <br /> <br/><br/>
  <div className="container" style={{width:'1200px', height:'250px'}}>
    <div className="row d-flex">
      <div className="col-md-3 d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
        <div className="media block-6 services d-block">
          <div className="icon">
            <span className="flaticon-yatch" />
          </div>
          <div className="media-body">
            <h3 className="heading mb-3">Special Activities</h3>
            <p style={{width:'230px'}}>A small river named Duden flows by their place and supplies.</p>
          </div>
        </div>
      </div>
      <div className="col-md-3 d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
        <div className="media block-6 services d-block">
          <div className="icon">
            <span className="flaticon-around" />
          </div>
          <div className="media-body">
            <h3 className="heading mb-3">Travel Arrangements</h3>
            <p style={{width:'230px'}}>A small river named Duden flows by their place and supplies.</p>
          </div>
        </div>
      </div>
      <div className="col-md-3 d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
        <div className="media block-6 services d-block">
          <div className="icon">
            <span className="flaticon-compass" />
          </div>
          <div className="media-body">
            <h3 className="heading mb-3">Private Guide</h3>
            <p style={{width:'230px'}}>A small river named Duden flows by their place and supplies.</p>
          </div>
        </div>
      </div>
      <div className="col-md-3 d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
        <div className="media block-6 services d-block">
          <div className="icon">
            <span className="flaticon-map-of-roads" />
          </div>
          <div className="media-body">
            <h3 className="heading mb-3">Location Manager</h3>
            <p style={{width:'230px'}}>A small river named Duden flows by their place and supplies.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      
    </div>
  )
}

export default StripRET
