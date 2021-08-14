import React from 'react';
import './index.scss'
import { FileTextOutlined } from '@ant-design/icons';

import ApplicantCard from './dependencies/Card';

const Applicants = (props) => {
 
    return (
    <div className = "applicants-modal">
        <div className = "applicant-title">Applicants for this job</div>
        <div>{props.applicants.length ? `Total ${props.applicants.length} applications` : `0 applications`}</div>
        <div className = "applicants">
            {!props.applicants.length ? <div className= "no-applicants"><FileTextOutlined /> <span>No applications available! </span></div> :
            <div className = "applicants-group">
            {props.applicants.map(ele =>   <ApplicantCard {...ele}/>)}
             </div> 
            }
        </div>
    </div>)
}

export default Applicants