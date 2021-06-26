import React from 'react'
import pc from '../../images/pc.png';

export default function HeaderMain() {
    return (
        <section  className="bg-light py-5 text-dark header-color">
        <div >
          <div className="row">
            <div className="col-lg-6 col-md-12 my-2">
              <img src={pc} className="img-fluid rounded" alt="" />   
            </div>
            <div className="col-lg-6 col-md-12 mt-2">
              <h1>Retro Tech <br/> Pick Of The Day </h1>
              <p className="py-4"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda quaerat dolores accusamus, hic maxime et!  </p>
         
                
                <div>
               <button className="btn btn-block btn-primary btn-style text-center ">  Join With Us </button>
                </div>
               
      
           
            </div>
          </div>
        </div>
        
        </section>
          
    )
}
