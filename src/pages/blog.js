import React from "react";
import { Link } from "react-router-dom";

export default function Blog()
{    
    return(
        <div id="blog-mid">
            <h3><Link to="/blog/ds_blog">Data Structures for Beginners(A complete guide)</Link></h3>
            <br/>
            <h3><Link to="/blog/arp_blog">ARP Spoofing using Python</Link></h3>
            <br/>
            <h3><Link to="/blog/waf_blog">An Introduction to Web Application Firewalls (WAF)</Link></h3>
        </div>
    )
}