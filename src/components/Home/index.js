import React from 'react';
import HomeImage from '../../assets/home-img.webp'
import AboutUs from './dependencies/About-Us';
import Companies from './dependencies/Companies';
import './home.scss'

const Home = (props) => {
    return(
            <div className = "outer-wrapper">
            <div className = "head-wrap">
            <div className = "heading">
             <span className = "heading-text" >Welcome to </span>
             <span className = "heading-text logo">My<span className = "logo-text">Jobs</span></span>
             <button className = "btn btn-primary mt-3">Get Started</button>
             </div>
            <div><img  className = "home-img" src = {HomeImage} alt=""/></div>
            </div>

             <div className = "about-section">
                <span className = "section-heading">Why Us</span>
                <AboutUs/>
             </div>
             <div className= "about-section">
                <span className = "section-heading">Companies Who Trust Us</span>
                  <Companies/>
             </div>
            </div>
    )
}

export default Home