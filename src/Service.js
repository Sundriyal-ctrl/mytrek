import {useLocation} from 'react-router-dom';
import {useHistory} from 'react-router'
import image1 from './w.jpg';
export default function Service() {
  const location=useLocation();
  const history=useHistory();
 console.log(location.state.data);

  const change=(idd)=>{
   
    history.push({
        pathname: '/Registration',
       state:{
            Region:idd,
       }
    });
  }
    return (
        <div className="container bg-white" style={{paddingLeft:'70px'}}>
            <br></br><br></br>
       
     <div >  
           <div className="row">
             {location.state.data.map((index) => {
                 return <div className="card col-sm-3 mx-4" style={{width: "18rem"}} key={index.Region}>
                     <img className="card-img-top" src="https://cdn.pixabay.com/photo/2021/07/08/03/55/mount-everest-6395759_960_720.jpg"  />
                     <div className="card-body">
                         <h5 className="card-title"><strong>Place : </strong>{index.Region}</h5>
                         <span className="card-text"><strong>Duration : </strong>{index.duration}</span><br></br>
                         <span className="card-text"><strong>State : </strong>{index.id}</span><br></br>
                         <span className="card-text"><strong>Best Time for trekking : </strong> {index.Best_time}</span><br></br>
                         <hr></hr>
                         <span className="card-text" >{index.About.slice(0,50)}</span>
                          <br></br>
                          <div className="d-grid gap-2">
                         <button className="btn btn-warning" onClick={()=>change(index.Region)} disabled={index.status==1?true:false}>Book Now</button>
                         </div>
                     </div>
                 </div>
             })}
             </div>
            
    
        </div>
        </div>
    )
}
