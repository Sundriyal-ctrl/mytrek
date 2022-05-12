import React, { useEffect, useState } from 'react'
import image1 from './w.jpg';
export default function Latest() {
  const notes = [

  ]
  const [data, setData] = useState(notes);

  useEffect(() => {
    fetch('https://hoteltechfix.000webhostapp.com/api/jsonselect.php').then((result) => {
      result.json().then((res) => {
        setData(res);
      })
    })
  }, []);

  return (
    <div className="container-fluid bg-white" >
    <br></br><br></br>
     <h2 className="text-center text-decoration-underline">Latest Trek is Added</h2>
     <hr></hr>
     <br></br><br></br>
      <div className="row" style={{padding:'0 60px 0 180px'}}>
        {data.map((index) => {

          return <div className="card col-sm-3  shadow mx-4">
            <div className="card-img-top" style={{ width: "13rem" }}>
            <img src="https://ui-assets-gc.thrillophilia.com/assets/homepage/escapes/escapes-2@1x-4912cf4a553e7b7d0ac06e0ebc9bf9e8587775e8043fe7a9b665cd4bcae25848.jpg" style={{width:"250px",height:"280px"}} />
                <div className="card-body">
                  
                  <h5 className="card-title">State : {index.id}</h5>
                  <p className="card-text"><strong>Duration :</strong> {index.duration}</p>
                  <p className="card-text"><strong>Place : </strong>{index.Region}</p>
                  <a href="#" className="btn btn-warning">Go somewhere</a>
                </div>
             </div>
            </div>

            })}
           </div>            
        </div>
    )
}
