import {React,useState} from 'react'
import Alert from './Alert.js';
import BB from './BB.js';
export default function Login() {
     let [email,setEmail]=useState("");
     let [password,setPass]=useState("");
     let[class1,setClass]=useState("");
     let [msg,setMsg]=useState("");
    
    const change=()=>{
        fetch("http://localhost/Quze/insertData.php",{
            "method":"POST",
            "header":{
                "content-type":"application/json",
                "accept":"application/json"
            },
            "body":JSON.stringify({
                email:email,
                password:password
            })
        }).then(response=>response.json())
        .then(response=>{
          navigator('/login1',true);
        })
        .catch(err=>{
            setMsg("Your are  Not Successfully Login");
            setClass("alert alert-danger");
            setEmail(" ");
            setPass(" ");
        });
    }
    
    return (
        <div className="row" style={{marginTop:"80px"}}>
            <Alert clas1={class1} msg={msg}/>
            <div className="col-sm-3">
            </div>
           
            <div className="col-sm-6 card shadow" style={{padding:"100px"}}>
            
                <div>
                  <input type="text" name="email" id="email" placeholder="Enter Your Email" className="form-control" onChange={(v)=>setEmail(v.target.value)}/>
                  <span id="gmail"></span>
                </div>
                <br></br>
                <br></br>
                <div>
                  <input type="password" name="password" id="password" placeholder="Enter Your Password" className="form-control" onChange={(s)=>setPass(s.target.value)}/>
                  <span id="asss"></span>
                </div>
                <br></br>
                <br></br>
                <div className="d-grid gap-2">
                    <button type="button" className="btn btn-warning " onClick={change}>Login</button>
                </div>
            </div>
            <div className="col-sm-3"></div>
        </div>
    )
}
