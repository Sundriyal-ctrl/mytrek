import React,{useState} from 'react'
import {useHistory} from 'react-router'
import {useForm} from 'react-hook-form'
import {useLocation} from 'react-router-dom';
import image1 from './w.jpg';
import swal from 'sweetalert';
import {Link} from 'react-router-dom';

export default function Login1() {
    const location=useLocation();
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
     const [emailvalid,setEV]=useState();
     const [passvalid,setPV]=useState();
     const [datevalid,setDV]=useState();
    const [date,setDate]=useState("");
    const [status,setStatus]=useState(false);
    const history=useHistory();
     const{register,handleSubmit,formState:{errors}}=useForm(); 
     var mo=location.state.money;
     var em=location.state.email;
     var Reg=location.state.Region;

     const EC=(val)=>{
      setEmail(val.target.value);
     

     }
     const PC=(val)=>{
         setPass(val.target.value);
        
     }
     const DC=(val)=>{
         setDate(val.target.value);
     }
    const change=()=>{
       
          
           fetch("https://hoteltechfix.000webhostapp.com/api/Quze/insertRegistration.php",{
            "method":"POST",
            "header":{
                "content-type":"application/json",
                "accept":"application/json"
            },
            "body":JSON.stringify({
                email:email,
                password:pass,
                date:date,
                place:'Masoori'
            })
        }).then(response=>response.json())
        .then(response=>{
          navigator('/Final',true);
          swal("Error!", ", State is not registered", "warning");  
        })
        .catch(err=>{
            history.push({
                pathname: '/Registration',
                state:{
                    money:mo,
                    email:em,
                    Region:Reg,
                }
            });  
        });
    
           
    }
    const onSubmit=data=>console.log(data);
    return (
        <div style={{backgroundImage:`url("https://ui-assets-gc.thrillophilia.com/assets/homepage/homepage-banner-2696fc25d8bb0f563e9ff7ae22882ee67cea624e244dfb0bc74316db0ffdcfba.jpg")`,backgroundRepeat:'inherit',height:'590px'}}>
        <div className="container" style={{marginLeft:"200px"}} >
       <br></br>
        
          <div class="col-md-5 mx-7 card shadow" style={{padding:"20px"}}>
           <h3 className="text-center">SignUp</h3>
           <form onSubmit={handleSubmit(change)}>
              <div>
               <input {...register("email1",{required:true,minLength:15,pattern:/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i})} type="text" placeholder="Enter Email"     className="form-control mt-4"   onChange={EC} autoComplete="on"/>
               {errors.email1 && <span style={{color:"red",fontWeight:"700",fontSize:"12px"}}>Empty Field or length must be greater then 15 or ex.rawatakash079@gmail.com</span>}
                
               </div>
               <br/>
               <div>
               <input  {...register("pass1",{required:true,minLength:5,pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/})}  type="password" placeholder="Enter Password" className="form-control mt-4 " onChange={PC} autoComplete="off"  />
               {/* <span style={{color:'red',fontWeight:"700"}}>{passvalid}</span> */}
                {errors.pass1 && <span style={{color:"red",fontWeight:"700",fontSize:"12px"}}>Empty Field or length must be greater then 3 or ex. Akashrawat1@</span>}

               
                </div>
                <br/>
                <div>
               <input {...register("date1",{required:true,minLength:4,pattern:/[0-9]{2}[-][0-9]{2}[-][0-9]{4}/})} type="text" placeholder="Enter Date" className="form-control mt-4 " onChange={DC} autoComplete="off"/>
               {errors.date1 && <span style={{color:"red",fontWeight:"700",fontSize:"12px"}}>Empty Field or length must be greater then 8 or ex. 08-02-1999</span>}

                
                </div>
               
             
            
                <br/>
                <div className="d-grid gap-2 my-2">
                    <input type="submit" className="btn btn-warning " value="Registration"/>
                </div>
                <div className="d-grid gap-2">
                    <Link to="/Registration" className="btn btn-success">Login</Link>
                </div>
                <Link to="forget" >forget password?</Link>
           </form>
          </div>  
          <div className="col-sm-2"></div>
        </div>
        </div>
    )
}
