import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import swal from 'sweetalert';
export default function Forget() {
    const [email,setEmail]=useState("");
    const [status,setStatus]=useState(true);
    const [otp,setOtp]=useState("");
    const[val,setVal]=useState("Send-OTP");
    const[res,setRes]=useState("");
       const sendotp=(e)=>{
        e.preventDefault();
        fetch("https://hoteltechfix.000webhostapp.com/api/Quze/forget.php",{
            "method":"POST",
            "header":{
                "content-type":"application/json",
                "accept":"application/json"
            },
            "body":JSON.stringify({
                email:email,
            })
        }).then(response=>response.json())
        .then(response=>{
          
          swal("Error!",email, "warning");  
        })
        .catch(err=>{
            swal("Success!", email, "success");
           setStatus(false);
           
           setVal("Verify OTP");
        });
       }

    const verify=(e)=>{
        e.preventDefault();
        var req=new XMLHttpRequest();
        req.open("POST","https://hoteltechfix.000webhostapp.com/api/Quze/forgetotp.php?otp="+otp+"&email="+email+"",true);
            
        req.send();
        req.onreadystatechange =()=>{
      
          if(req.readyState === 4 && req.status===200)
          {
                setRes(req.responseText);
          }
         if(req.status===201)
          {
              swal("Error!", "OTP did not match", "warning");   
          }
        }
    } 
    return (
        <div className="container-fluid ">
        <div className="col-sm-5 bg-white container-fluid">
          <h2 className="text-center">Forget Password</h2>
          <div className="alert alert-success">
          <p>{res}</p>
          </div>
            <form>
            <br></br>
            <div >
               <div>
                <input type="text" placeholder="Enter Email Address" className="form-control my-3" onChange={(val)=>setEmail(val.target.value)}/>
                </div>
                <br></br>

                <div>
                    <input type="number" placeholder="Enter OTP"  hidden={status} className="form-control my-3" id="p" onChange={(val1)=>setOtp(val1.target.value)}/>
                </div>
                <br></br>
                </div>
                <div className="d-grid gap-2">
                    <button className="btn btn-success" onClick={sendotp} hidden={!status}>Send-OTP</button>
                </div>
                <div className="d-grid gap-2">
                    <button className="btn btn-success" onClick={verify} hidden={status}>{val}</button>
                </div>
                <br></br>
            </form>
            </div>
            <br></br>
            <br></br>      
            <br></br>
            <br></br>      
            <br></br>
            
        </div>
    )
}
