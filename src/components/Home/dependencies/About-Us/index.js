import React from 'react';
import './about-us.scss'

const aboutUs = () => {
    const qualities = ["Get More Visibility", "Organize Your Candidates" , "Verify Their Abilities"]
 return (
     
     <div className = "about-us">
         {qualities.map((ele) => {
             return (
             <div className = "card">
                 <div className = "card-heading">{ele}</div>
                 <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
             </div>)
         })}
    </div>
 )
}

export default aboutUs