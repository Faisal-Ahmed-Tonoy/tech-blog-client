  
import React, { useState } from 'react';

 
const ItemList = (props) => {
   const deleteItem=props.deleteItem;
    const {_id,imageURL,name,price,brand} =props.item;
    
    
   
    
    return (

        <div className="col-md-4 text-center details-container mt-5">
        <img style={{height:'150px',backgroundColor:'#6D63E8',  borderRadius: '10px 10px'}} src={imageURL} alt=""/>
       
        <p> {name}</p>
      <div>
       
      <button className="btn btn-primary" onClick={()=> deleteItem(_id) }>Delete</button>     
      </div>
        
    </div>
  
    );
};

export default ItemList;