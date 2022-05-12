import React from 'react'
import useState from 'react'
import {useLocation} from 'react-router-dom';
import {useHistory} from 'react-router'

export default function BB() {
  const location=useLocation();
  const history=useHistory();
  var a=location.state.money;
     var e=location.state.email;
     var r=location.state.Region;
   const change=()=>{
     
   window.location.assign("https://hoteltechfix.000webhostapp.com/api/PHP API/pgRedirect.php?TXN_AMOUNT="+a+"&email="+e+"&Region="+r+"");
      
 
   
   }
  return (
    <div className="bg-white container col-sm-4">
    <div className="">
    <h3 className="text-center">BILL HISTORY</h3>
    <hr></hr>
      <form >
		
				
				
				<div>
				
				<label>INDUSTRY_TYPE_ID </label>
					<input id="INDUSTRY_TYPE_ID" tabindex="4" maxlength="12" size="12" name="INDUSTRY_TYPE_ID" autocomplete="off" value="Retail" className="form-control" readOnly/>
          </div>
          <br></br>
				<div>
        <label>EMAIL ACCOUNT </label>
					<input id="INDUSTRY_TYPE_ID"  autocomplete="off" value={e} className="form-control" readOnly/>
          </div>
          <br></br>
				<div>
					<label>CHANNEL_ID</label>
					<input id="CHANNEL_ID" tabindex="4" maxlength="12"
						size="12" name="CHANNEL_ID" autocomplete="off" value="WEB" className="form-control" readOnly/>
				</div>
        <br></br>
				<div>
					<label>TOTAL_AMOUNT</label>
					<input title="TXN_AMOUNT" tabindex="10"
						type="text" name="TXN_AMOUNT"
						value={location.state.money} className="form-control" readOnly/>
					</div>
          <br></br>
					<div className="d-grid gap-2">
					<input value="CHECKOUT" type="submit"	onClick={change} className="btn btn-warning" formTarget="_blank"/>
          </div>
          <br></br>
	</form>
  </div>
    </div>
  )
}
