import React, { useState, useEffect } from "react";
import BlogDetails from '../BlogDetails/BlogDetails';

 

const Blog = () => {
    const [blog,setBlog] =  useState([]);
    useEffect(()=>{
fetch('http://localhost:5000/blogs')
.then(res =>res.json())
.then(data =>setBlog(data))
    },[])
    return (
      <section style={{color:"linear-gradient(to right, #4776E6, #8E54E9)"}} className="details-container  mt-5">
            <div className="text-center"  >
                 <h2   >Blog</h2>
            </div>
            <div className="row" style={{ background: 'rgb(63,94,251)', background:'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)'}} >
                  {
                      blog.map(details=><BlogDetails details={details} key={details._id}></BlogDetails> )
                  }
            </div>


      </section>
    );
};

export default Blog;