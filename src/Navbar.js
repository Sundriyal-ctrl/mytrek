import React,{useState} from 'react';
import {Link} from 'react-router-dom';
export default function Navbar() {
   
      const [back,setBack]=useState("bg-dark");
      const [text,setText]=useState("text-white"); 
      const change=()=>
      {
         if(back==="bg-dark")
         {
           setBack("bg-light");
           setText("text-black");
         }
         else
         {
           setBack("bg-dark");
           setText("text-white");
         }
      }

    return (
       <div >
        <nav className={`navbar navbar-expand-lg`} >
        <div className="container-fluid">
  <Link className={`nav-link ${text}`} to="/"><h4><i className="fa fa-arrow-trend-up" style={{fontWeight:"800"}}></i> Trek-Buddy</h4></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-end container " id="navbarNav">
    <ul className="navbar-nav ">
      <li className="nav-item active">
        <Link className={`nav-link ${text}`} to="/" style={{fontWeight:"700"}} >Home</Link>
      </li>
      <li className="nav-item">
        <Link className={`nav-link ${text}`} to="Features" style={{fontWeight:"700"}}>Features</Link>
      </li>
      
      <li className="nav-item">
        <Link className={`nav-link ${text}`} to="/" style={{fontWeight:"700"}}>Disabled</Link>
      </li>
      <li className="nav-item">
        <Link className={`nav-link ${text}`} to="/login" style={{fontWeight:"700"}}><i className="fa fa-user-shield"></i>Log-In</Link>
      </li>
      <li className="nav-item nav-link">
      <div className="form-check form-switch">
         <input className="form-check-input" type="checkbox" id="check" onClick={change}/>
             
        </div>
      </li>
    </ul>
  </div>
  </div>
</nav>    
 
</div>
    )
}

