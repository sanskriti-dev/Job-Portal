import { Button } from 'antd';
import React, { useState } from 'react';
import './jobcard.scss'
import LocationImg from "../../../../assets/location.png"
import { Modal } from "antd";
import Applicants from '../Applicants';

const JobCard = (props) => {
    const [modalVisible , setModalVisible] = useState(false)

    return (
    <div className = "card-wrapper">
        <div className = "_title">{props.title}</div>
        <div className = "desc">{props.description}</div>
        <div className = "_location-wrapper">
            <div className = "location"><img className ="location-img" src = {LocationImg}/><span>{props.location}</span></div>
            <Button className ="view-applicants" onClick = {() => setModalVisible(true) }>View Applicants</Button>
        </div>

      <Modal visible = {modalVisible} onCancel = {() => setModalVisible(false)} footer = {null} ><Applicants/></Modal> 

    </div>
    )
}

export  default JobCard