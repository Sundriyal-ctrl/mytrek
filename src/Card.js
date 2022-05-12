import React from 'react'

export default function Card() {
    return (
        <div className="col-sm-4 my-3">
         
            <div className="card" style={{width:"18rem"}}>
  <img src="https://images.pexels.com/photos/2090645/pexels-photo-2090645.jpeg?cs=srgb&dl=pexels-leah-kelley-2090645.jpg&fm=jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="log" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
         
         
        </div>
    )
}
