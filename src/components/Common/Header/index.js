import React from 'react';
import './header.scss'

const Header = () => {
    return (
    <div className = "header-wrapper">
        <div className = "top-view">
           <header>
                <span style = {{color : "white"}}>My<span style = {{color : "#43AFFF"}}>Jobs</span></span>
                {/* <button>JS</button> */}
            </header>
        </div>
    </div>
    )
}

export default Header