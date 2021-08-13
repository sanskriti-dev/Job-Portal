import { Button } from 'antd';
import React from 'react';
import {EditOutlined} from '@ant-design/icons';
import './recruiter.scss'
import { useHistory } from 'react-router-dom';
import {HomeFilled} from '@ant-design/icons';



const DashBoard = (props) => {
    const history = useHistory()
    return (
        <div className = "dashboard-wrapper">
            <div className = "job-listing">
             <div className= "icons">
            <HomeFilled />
            <span>Home</span>
            </div>
            <span className = "title">Jobs post by you</span>
            

            </div>   
            
            
            <div className = "create-job">
         <EditOutlined />
         <div>Your posted jobs will show here!</div>
         <Button type = "primary" onClick = {() => history.push('/create-job') }>Post a job</Button>
         </div>
 

    </div>
    
    )
}

export default DashBoard