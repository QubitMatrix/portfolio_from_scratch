import React from "react";
import { Link } from "react-router-dom";

export default function Blog(){
    
    return(<div id="blog-mid">
        <h3><img height="250" width="350" src={require("../assets/data_structure_cover.jpg")}></img><br/><Link to="/blog/ds_blog">Data Structures for Beginners(A complete guide)</Link></h3></div>)
}