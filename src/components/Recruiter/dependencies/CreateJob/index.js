import React from 'react';
import { Form,Input,Button } from 'antd';
import 'antd/dist/antd.css';
import Card from '../../../Common/Card';
import '../../../Access/access.scss'
import TextArea from 'antd/lib/input/TextArea';

const CreateJob = () => {
                
    return (
        <>
        <span className = "title">Post a Job</span>
          <Form>
              <label className = "field-label">Job title*</label>
              <Form.Item name = "password">
              <Input placeholder = "Enter job title"/>
              </Form.Item>

              <label className = "field-label">Description*</label>
              <Form.Item name = "description">
              <TextArea  placeholder = "Enter job description" />
              </Form.Item>
            
              <label className = "field-label">Location*</label>
              <Form.Item name = "password">
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