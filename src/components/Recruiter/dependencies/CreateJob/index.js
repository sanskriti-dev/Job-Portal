import React from 'react';
import { Form,Input,Button, notification } from 'antd';
import 'antd/dist/antd.css';
import Card from '../../../Common/Card';
import '../../../Access/access.scss'
import TextArea from 'antd/lib/input/TextArea';
import { RecruiterServices } from '../../api/services';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const CreateJob = () => {

    const state = useSelector(state => state?.auth)
    const history = useHistory()

    const handleCreateJob = async(values) => {
        const response = await RecruiterServices.createJob(values,state?.token)
        console.log(response)
        if(response.data.success) {
            history.push('/dashboard')
            notification["success"]({
                message: <strong>Job Posted Successfully</strong>,
            });
        }


    }
                
    return (
        <>
        <span className = "title">Post a Job</span>
          <Form onFinish = {handleCreateJob}>
              <label className = "field-label">Job title*</label>
              <Form.Item name = "title">
              <Input placeholder = "Enter job title"/>
              </Form.Item>

              <label className = "field-label">Description*</label>
              <Form.Item name = "description">
              <TextArea  placeholder = "Enter job description" />
              </Form.Item>
            
              <label className = "field-label">Location*</label>
              <Form.Item name = "location">
              <Input placeholder = "Enter your location"/>
              </Form.Item>
              
              <Button className ="btn btn-default" type="primary" htmlType="submit">
                   Post
          </Button>
          </Form>
        </>
    )

}

const CreateJobForm = Card(CreateJob)

export default CreateJobForm