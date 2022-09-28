import React from 'react'
import video from './css/images/vid-4.mp4'
import video2 from './css/images/vid-1.mp4'
import video3 from './css/images/vid-2.mp4'
import video4 from './css/images/vid-3.mp4'

function HomeSlider() {
  return (
    <>
<div
  id="carouselExampleIndicators"
  className="carousel slide"
  data-ride="carousel"
>
  <ol className="carousel-indicators">
    <li
      data-target="#carouselExampleIndicators"
      data-slide-to={0}
      className="active"
    />
    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      {/* <img className="d-block w-100" src="..." alt="First slide" /> */}
      <video className="d-block w-100" autoPlay loop  muted playsInline  >
      <source src={video} type="video/mp4"  id='vdo'/>
    </video>
    </div>
    <div className="carousel-item">
      {/* <img className="d-block w-100" src="..." alt="Second slide" /> */}
      <video className="d-block w-100" autoPlay loop  muted playsInline  >
      <source src={video2} type="video/mp4"  id='vdo'/>
    </video>
    </div>
    <div className="carousel-item">
      {/* <img className="d-block w-100" src="..." alt="Third slide" /> */}
      <video className="d-block w-100" autoPlay loop  muted playsInline  >
      <source src={video3} type="video/mp4"  id='vdo'/>
    </video>
    </div>
  </div>
  <a
    className="carousel-control-prev"
    href="#carouselExampleIndicators"
    role="button"
    data-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </a>
  <a
    className="carousel-control-next"
    href="#carouselExampleIndicators"
    role="button"
    data-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </a>
</div>

    </>
  )
}

export default HomeSlider
