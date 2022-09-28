import React from 'react'
import img1 from './css/images/p-1.jpg'
import img3 from './css/images/p-3.jpg'
import img2 from './css/images/p-2.jpg'
import img4 from './css/images/p-4.jpg'

function ZigZag() {
  return (
    <div>
  <div className="card-deck" style={{width:'1500px', marginLeft:'10px'}}>
  <div className="card">
    <img src={img1} className="card-img-top" alt="..." style={{width:'360px', height:'300px'}} />
    <div className="card-body">
      <h4 className="card-title">  Cultural tourism</h4>
      <p className="card-text">
    
India is known for its rich cultural heritage and an element of mysticism, which is why tourists come to India to experience it for themselves. The various fairs and festivals that tourists can visit in India are the Pushkar fair, Taj Mahotsav, and Suraj Kund mela.
      </p>
    </div>
    <div className="card-footer">
    <button className="btn btn-primary" style={{width:'320px', height:'45px'}}>Explore Now</button>

    </div>
  </div>

  <div className="card">
  <div className="card-footer">
    <button className="btn btn-primary" style={{width:'320px', height:'45px'}}>Explore Now</button>
    <div className="card-body">
      <h4 className="card-title"> Eco tourism</h4>
      <p className="card-text">
     
Among the types of tourism in India, ecotourism have grown recently. Ecotourism entails the sustainable preservation of a naturally endowed area or region. This is becoming more and more significant for the ecological development of all regions that have tourist value. For ecotourism in India, tourists can go to places such as Kaziranga National Park, Gir National Park, and Kanha National Park.
      </p>
    </div>
    </div>
    <img src={img2} className="card-img-top" alt="..." style={{width:'360px', height:'300px'}}/>
   
   
  </div>

  <div className="card">
    <img src={img3} className="card-img-top" alt="..." style={{width:'360px', height:'300px'}} />
    <div className="card-body">
      <p className="card-text">
  <h4 className="card-title">Adventure tourism</h4>
  As a kind of tourism in India, adventure tourism has recently grown in India. This involves exploration of remote areas and exotic locales and engaging in various activities. For adventure tourism in India, tourists prefer to go for trekking to places like Ladakh, Sikkim, and Himalaya. Himachal Pradesh and Jammu and Kashmir are popular for the skiing facilities they offer. 
      </p>
      
    </div>
    <div className="card-footer">
    <button className="btn btn-primary" style={{width:'320px', height:'45px'}}>Explore Now</button>

    </div>
  </div>

  <div className="card">
  <div className="card-footer">
    <button className="btn btn-primary" style={{width:'320px', height:'45px'}}>Explore Now</button>
    <div className="card-body">
    <p className="card-text">
    <h4 className="card-title">Medical tourism</h4>
    Tourists from all over the world have been thronging India to avail themselves of cost-effective but superior quality healthcare in terms of surgical procedures and general medical attention. There are several medical institutes in the country that cater to foreign patients and impart top-quality healthcare at a fraction of what it would have cost in developed nations such as USA and UK.
      </p>
    </div>
   
    </div>
      
    <img src={img4} className="card-img-top" alt="..." style={{width:'360px', height:'300px'}}/>
   
</div>
  </div>

    </div>
  )
}

export default ZigZag
