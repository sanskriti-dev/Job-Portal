import { Button } from 'antd';
import React, { useEffect, useState } from 'react';
import {EditOutlined} from '@ant-design/icons';
import './recruiter.scss'
import { useHistory } from 'react-router-dom';
import {HomeFilled} from '@ant-design/icons';
import { RecruiterServices } from './api/services';
import { useSelector } from 'react-redux';
import JobCard from './dependencies/JobCard';
import { Pagination } from 'antd';



const DashBoard = (props) => {
    const history = useHistory();
    const state = useSelector(state => state?.auth)
    const [jobsCount , setJobsCount] = useState()
    const [postedJobs, setPostedJobs] = useState([])

    useEffect(() => {
        allPostedJobs()
    },[state?.token])


    const allPostedJobs = async () => {
        const response =  await RecruiterServices.getPostedJobs(state?.token)
        if(response.data.success)
        {
            console.log(response.data.data)
            let count =  response.data.data.metadata.count
            let jobs = response.data.data.data
            setPostedJobs(jobs)
            setJobsCount(count)
        }
        console.log(response)
    } 


    return (
        <div className = "dashboard-wrapper">
            <div className = "job-listing">
             <div className= "icons">
            <HomeFilled />
            <span>Home</span>
            </div>
            <span className = "title">Jobs posted by you</span>
            </div>   
            <div className = "jobs">
                {postedJobs?.map(ele => <JobCard {...ele}/>)}
            </div>
            
            
         
         
         
        {!jobsCount ?  
        <div className = "create-job">
         <EditOutlined />
         <div>Your posted jobs will show here!</div>
         <Button type = "primary" onClick = {() => history.push('/create-job') }>Post a job</Button>
         </div> : null }
      <Pagination className = "pagination" defaultCurrent={1} />

    </div>
    
    )
}

export default DashBoard