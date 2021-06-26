import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import'./BlogDetails.css';

const BlogDetails = (props) => {
    const {_id,imageURL,description,name} =props.details
    const history = useHistory()
    const handleProceed =() =>{
        history.push('/blog/'+_id)
    }
   
    
  
 
    return (
        <div className="col-md-4 text-center details-container mt-5"  >
            <img style={{height:'150px',backgroundColor:'#6D63E8',  borderRadius: '10px 10px'}} src={imageURL} alt=""/>
           
            <p> {name}</p>
          <div>
            <button style={{height:'40px',backgroundColor:'#6D63E8',  borderRadius: '10px 10px'}}  onClick={handleProceed}   className="btn btn-primary my-2 btn-style" type="button">          <Link to= {"/blog/"+_id}>  <h6  style={{color:'white', textDecoration: 'none' }}> Explore</h6></Link>  </button>
          </div>
            
        </div>
    );
};

export default BlogDetails;