import {React,useState} from 'react'
import swal from 'sweetalert';
import {useLocation} from 'react-router-dom';
import {useHistory} from 'react-router'
import {Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'
export default function Registration() {
     const [email,setEmail]=useState("");
     const [password,setPass]=useState("");
     const history=useHistory();
     const location=useLocation();
     const{register,handleSubmit,formState:{errors}}=useForm(); 
      const [s,setS]=useState(location.state.Region);
    const change=()=>{
        var req=new XMLHttpRequest();
  req.open("POST","https://hoteltechfix.000webhostapp.com/api/Quze/SelectData.php?email="+email+"&pass="+password+"",true);
      
  req.send();
  req.onreadystatechange =()=>{

    if(req.readyState === 4 && req.status===200)
    {
            
       
       
       history.push({
        pathname: '/BB',
        state:{
            money:1,
            email:email,
            Region:s,
        }
    });
        }
        
    if(req.status===201)
    {
        swal("Error!", req.responseText, "warning");   
    }
  }   
    }
     const Go=()=>{
        history.push({
            pathname: '/Login1',
            state:{
                money:1,
                email:email,
                Region:s,
            }
        });  
     }
    return (
        <div className="row" style={{marginTop:"80px"}}>
            
            <div className="col-sm-3">
            </div>
           
            <div className="col-sm-6 card shadow" style={{padding:"100px"}}>
                 <form onSubmit={handleSubmit(change)}>
                <div>
                  <input   {...register("email1",{required:true,minLength:15,pattern:/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i})} type="text"  placeholder="Enter Your Email" className="form-control" onChange={(v)=>setEmail(v.target.value)}/>
                  {errors.email1 && <span style={{color:"red",fontWeight:"700",fontSize:"12px"}}>Empty Field or length must be greater then 15 or ex.rawatakash079@gmail.com</span>}
                </div>
                <br></br>
                <br></br>
                <div>
                  <input {...register("pass1",{required:true,minLength:5,pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/})}  type="password"  placeholder="Enter Your Password" className="form-control" onChange={(s)=>setPass(s.target.value)}/>
                  {errors.pass1 && <span style={{color:"red",fontWeight:"700",fontSize:"12px"}}>Empty Field or length must be greater then 3 or ex. Akashrawat1@</span>}
                </div>
                <br></br>
                <br></br>
                <div className="d-grid gap-2">
                   <input type="submit" value="LOGIN" className="btn btn-warning"/>
                </div>
                <div>

                <div className="d-grid gap-2 my-2">
               <button className="btn btn-info" onClick={Go}>Registration?</button>
               </div>
                </div>
                </form>
            </div>
            <div className="col-sm-3"></div>
           
        </div>
    )
}
