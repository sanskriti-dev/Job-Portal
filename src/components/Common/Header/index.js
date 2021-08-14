import React from 'react';
import './header.scss';
import { Button, Dropdown, Menu, notification  } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CaretDownOutlined  } from '@ant-design/icons';
import { AUTH_LOGOUT } from '../../../store/action/actionTypes';



const Header = (props) => {
    let history = useHistory()
    const state = useSelector (state => state?.auth)
    const dispatch = useDispatch();
    
    
    const handleLogout = () => {
        history.push('/')
        dispatch({type : AUTH_LOGOUT})

        notification.open({
            message: 'Log Out',
            description:
              'You have successfully logged out.',
          });
        
        
        localStorage.clear();

    }

    const menu = (
        <Menu>
            <Menu.Item>
                <div onClick = {handleLogout}>
                    Logout
                </div>
            </Menu.Item>
        </Menu>
    )

    return (
    <div className = "header-wrapper">
        <div className = "top-view">
           <header>
                <span style = {{color : "white"}}>My<span style = {{color : "#43AFFF"}}>Jobs</span></span>
             {!state.isloggedIn ?  
              <Button type ="default" onClick = {() => {history.push('/login')}} >Login/Signup</Button> 
              : 
              <div className = "nav-wrapper">
                  <Link to = '/create-job'> <span className = "post" >Post a job</span></Link>
                  <Dropdown overlay = {menu}>
                      <div className = "logo-wrapper">
                  <div className = "name-logo">{state.name[0].toUpperCase()}</div>
                  <CaretDownOutlined style = {{color : "#fff"}}/>
                  </div>
                      
                  </Dropdown>
              </div>}
            </header>
        </div>
    </div>
    )
}

export default Header