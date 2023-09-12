import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handleAddToBookmarks,handleMarkAsRead}) => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch("blog.json")
        .then((res)=>res.json())
        .then((data)=>setBlogs(data))
    },[])
    return (
        <div className="lg:w-2/3 mt-10">
            <h1 className="text-2xl p-3 text-blue-950">Blogs Length: {blogs.length}</h1>
            {
               blogs.map(blog =><Blog 
                handleMarkAsRead={handleMarkAsRead}
                handleAddToBookmarks={handleAddToBookmarks}
                blog={blog} 
                key={blog.id}>
                </Blog>) 
            }
        </div>
    );
};
Blogs.propTypes = {
    handleAddToBookmarks : PropTypes.func,
    handleMarkAsRead : PropTypes.func
}

export default Blogs;