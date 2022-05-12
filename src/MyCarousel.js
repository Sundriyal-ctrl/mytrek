import React, { Component } from 'react';
import ReactCardCarousel from 'react-card-carousel';

 export default function MyCarousel(){

  const CARD_STYLE ={
   
      height: '400px',
      width: '400px',
      paddingTop: '20px',
      paddingLeft:'55px',
      textAlign: 'center',
      background: '#52C0F5',
      //color: '#FFF',
      fontSize: '12px',
      textTransform: 'uppercase',
      borderRadius: '10px',
    };
  

    return (
      <div className="bg-white container-fluid" style={{height:"100%"}}>
      
      <h1 className="text-center text-decoration-underline">FEATURES</h1>
      
      <ReactCardCarousel autoplay={ true } autoplay_speed={ 2500 } >
       
        <div style={ CARD_STYLE }>
        <div class="card" style={{width:"18rem"}}>
  <img class="card-img-top" src="https://res.cloudinary.com/thrillophilia/image/upload/c_fill,dpr_1.0,f_auto,fl_progressive.strip_profile,g_center,h_301,q_auto,w_222/v1/filestore/39k2j1obvnnsmzhl81hr35fvt2gv_9ivn14zobmu7wsyh2ufry6f5c3qm_secret-garden-pushkar-8c38ca.jpg" alt="Card image cap" style={{height:"200px"}}/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>
        <div style={ CARD_STYLE }>
        <div class="card" style={{width: "18rem"}}>
  <img class="card-img-top" src="https://res.cloudinary.com/thrillophilia/image/upload/c_fill,dpr_1.0,f_auto,fl_progressive.strip_profile,g_center,h_301,q_auto,w_222/v1/filestore/0kclx0s22i4skhf8xd92d2lqglaj_LADAKH%20%282%29.png" alt="Card image cap" style={{height:"200px"}}/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>
        <div style={CARD_STYLE }>
        <div class="card" style={{width: "18rem"}}>
  <img class="card-img-top" src="https://res.cloudinary.com/thrillophilia/image/upload/c_fill,dpr_1.0,f_auto,fl_progressive.strip_profile,g_center,h_301,q_auto,w_222/v1/filestore/l4b5hay7z48obn260r0zow2p95ds_q16ncnaqrd72fih30en2zagpwbhn_kedarkantha-summit.jpg" alt="Card image cap" style={{height:"200px"}}/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>
        <div style={CARD_STYLE }>
        <div class="card" style={{width:"18rem"}}>
  <img class="card-img-top" src="https://res.cloudinary.com/thrillophilia/image/upload/c_fill,dpr_1.0,f_auto,fl_progressive.strip_profile,g_center,h_301,q_auto,w_222/v1/filestore/g4d5nvpg50np79llpu3v33ld4d9v_Artboard%204%20%283%29.png" alt="Card image cap" style={{height:"200px"}}/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>
        <div style={ CARD_STYLE }>
        <div class="card" style={{width: "18rem"}}>
  <img class="card-img-top" src="https://res.cloudinary.com/thrillophilia/image/upload/c_fill,dpr_1.0,f_auto,fl_progressive.strip_profile,g_center,h_301,q_auto,w_222/v1/filestore/28jyy9mws5mqu7x8mswp45yrriek_kandima%202.jpg" alt="Card image cap" style={{height:"200px"}}/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>
        
      </ReactCardCarousel>
      </div>
    );
 }
  
