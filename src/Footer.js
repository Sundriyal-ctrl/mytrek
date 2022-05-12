import React from "react";

const FooterPage = () => {
  return (
    <div color="blue" className="font-small pt-4 mt-4 ">
      <div fluid className="text-center text-md-left " style={{backgroundColor:'deepskyblue',color:"white"}}>
        <div>
          <div md="6" className="py-2">
            <h5 className="title">TREKINGS</h5>
            <p>
             Treking is the outdoor activity if walking for more than a day.it is a form of walking undertaken with the specfic purpose if exploring abd enjoying tge scenary.
            </p>
          </div>
          <div md="6">
            <h5 className="title">Technology used in this website</h5>
            <ul>
              <li className="list-unstyled">
                 Learn HTML
              </li>
              <li className="list-unstyled">
                 Learn CSS-5
              </li>
              <li className="list-unstyled">
                 Learn REACT
              </li>
              <li className="list-unstyled">
                 Learn PHP-5
              </li>
            </ul>
          </div>
        </div>
        <div className=" text-center py-3 bg-black" style={{color:"white"}}>
        <div>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com">rawatakash079@gmail.com</a>
        </div>
      </div>
      </div>
    
    </div>
  );
}

export default FooterPage;