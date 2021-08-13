import React from 'react';
import './header.scss';
import { Button  } from 'antd';
import { useHistory } from 'react-router-dom';



const Header = (props) => {
    let history = useHistory()
    return (
    <div className = "header-wrapper">
        <div className = "top-view">
           <header>
                <span style = {{color : "white"}}>My<span style = {{color : "#43AFFF"}}>Jobs</span></span>
                <Button type ="default" onClick = {() => {history.push('/login')}} >Login/Signup</Button>
            </header>
        </div>
    </div>
    )
}

export default Header