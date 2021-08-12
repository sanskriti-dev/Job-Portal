import React from 'react';
import './header.scss'

const header = () => {
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

export default header