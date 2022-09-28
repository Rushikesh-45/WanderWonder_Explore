import React from 'react'

function PackageCard() {
    const plist=JSON.parse(sessionStorage.getItem('search'));
    // let plist=[]
    const pkgs =plist.map( (element)=>{ 
        return(
            <span className="card" style={{ width: "18rem" }}>
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Cras justo odio</li>
    <li className="list-group-item">Dapibus ac facilisis in</li>
    <li className="list-group-item">Vestibulum at eros</li>
  </ul>
  <div className="card-body">
    <a href="#" className="card-link">
      Card link
    </a>
    <a href="#" className="card-link">
      Another link
    </a>
  </div>
</span>
      
      
        )
      
      })
  return (
    <>
    <div className='flex-container'>{pkgs}</div>


    </>
  )
}

export default PackageCard
