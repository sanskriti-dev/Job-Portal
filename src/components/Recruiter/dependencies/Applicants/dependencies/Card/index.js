import React from 'react';
import './index.scss'

const ApplicantCard = (props) => {

    return (
        <div className = "applicant-card">
            <div className = "details">
                <div className = "name-logo">{props?.name[0].toUpperCase()}</div>
                <div className = "applicant-details">
                    <span className = "applicant-name">{props.name}</span>
                    <div>{props.email}</div>
                </div>
            </div>
            <div>
                <span className = "applicants-skills">Skills</span>
                <div>{props.skills}</div>

            </div>
            

        </div>
    )

}

export default ApplicantCard