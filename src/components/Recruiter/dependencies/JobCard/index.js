import { Button } from 'antd';
import React, { useState } from 'react';
import './jobcard.scss'
import LocationImg from "../../../../assets/location.png"
import { Modal } from "antd";
import Applicants from '../Applicants';
import { RecruiterServices } from '../../api/services';
import { useSelector } from 'react-redux';

const JobCard = (props) => {
    const [modalVisible , setModalVisible] = useState(false)
   
    const state = useSelector(state => state?.auth)
    const [allApplicants,setAllApplicants] = useState([])

    const handleAllapplicants = async() => {
        setModalVisible(true)
        const response = await RecruiterServices.getApplicantsForJob(props.id,state?.token)
        if(response.data.success)
        {
           setAllApplicants(response.data.data)
        }

    }
    

    return (
    <div className = "card-wrapper">
        <div className = "_title">{props.title}</div>
        <div className = "desc">{props.description}</div>
        <div className = "_location-wrapper">
            <div className = "location"><img className ="location-img" src = {LocationImg} alt=""/><span>{props.location}</span></div>
            <Button className ="view-applicants" onClick = { handleAllapplicants }>View Applicants</Button>
        </div>

      <Modal visible = {modalVisible} onCancel = {() => setModalVisible(false)} footer = {null} ><Applicants applicants = {allApplicants}/></Modal> 

    </div>
    )
}

export  default JobCard