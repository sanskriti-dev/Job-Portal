import React from 'react';
import './index.scss'
import { FileTextOutlined } from '@ant-design/icons';

const Applicants = (props) => {
  
    return (
    <div className = "applicants-modal">
        <div className = "applicant-title">Applicants for this job</div>
        <div>{props.count ? `Total ${props.count} applications` : `0 applications`}</div>
        <div className = "applicants">

            {!props.count ? <div className= "no-applicants"><FileTextOutlined /> <span>No applications available! </span></div> :null}
        </div>
    </div>)
}

export default Applicants