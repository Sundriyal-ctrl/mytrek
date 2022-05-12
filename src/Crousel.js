import React,{useState} from 'react'
import Service from './Service';
import image from './wp.jpg';
import swal from 'sweetalert';
import {useHistory} from 'react-router'
export default function Crousel() {
    let [place,setPlace]=useState('');
    const [response1,setRes]= useState('');

   
    const history=useHistory();
   
    
    const r={
        paddingTop:"20px",
        paddingBottom:"20px",
        
        
     }
     const change=()=>{
        
        var req=new XMLHttpRequest();
  req.open("POST","https://hoteltechfix.000webhostapp.com/api/jsonsearch.php?search="+place+"",true);
      
  req.send();
  req.onreadystatechange =()=>{

    if(req.readyState === 4 && req.status===200)
    {
            
       //document.getElementById("danger").innerHTML=req.responseText;
       setRes(req.responseText);
       
       //history.push("/Service");
       var my =JSON.parse(req.responseText);
       console.log(my[0].id)
       history.push({
        pathname: '/Service',
        state: { 
            data:my,
          }
    });
        }
        
    if(req.status===201)
    {
        swal("Error!", "Sorry Empty Field is not allowed and wrong input is also not allowed", "warning");   
    }
  }   
    }
    
     
    return (
        <div  style={{height:"450px"}} ><br/>
           
        <br/><br/>
        <div id="pp">
        <h2 className="text-center" style={{color:"white"}}>Treking ? Search, Compare & Save</h2>
         <h4 style={{color:"white"}} className="text-center">Search Best Deal For You & Free Cancle Service Full Customer Support </h4>
        </div>
        <div style={r} className="container shadow bg-warning">
   <div className="row" >
       
       <div className="col-sm-8">
           <input type="text" className="form-control" placeholder="WHERE YOU WANT TO GO(STATE NAME)"  onChange={(e)=>setPlace(e.target.value)} style={{textTransform:"uppercase"}}/>
       </div>
       
      
       <div className="col-sm-4">
           <button className="btn btn-primary" onClick={change}><i className="fa fa-search" > SEARCH FOR RIDE</i> </button>
       </div>
           </div>
       
       
       
   </div>
        
</div>
    )
}
