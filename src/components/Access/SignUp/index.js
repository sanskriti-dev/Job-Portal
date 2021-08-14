import React, { useState } from 'react';
import { Form,Input,Button, notification } from 'antd';
import 'antd/dist/antd.css';
import Card from '../../Common/Card';
import {SolutionOutlined,UserOutlined} from '@ant-design/icons';
import '../access.scss'
import { AuthServices } from '../api/services';
import { Link } from 'react-router-dom';


const SignUp = () => {

    const [userRole,setUserRole] = useState(0)

    const handleSignUp = async (values) => {
        let formData = values
        formData["userRole"] = userRole 
        const response = await AuthServices.signUp(formData);
        if(response.success)
        {
            notification["success"]({
                message: <strong>Registered Successfully</strong>,
            });

        }

    }
                
    return (
        <>
        <span className = "title">Sign Up</span>
          <Form onFinish = {handleSignUp}>
          <label className = "field-label">I'm a*</label>
              <Form.Item >
                  <div className ="tabs">
              <Button type="primary" icon={<SolutionOutlined />} onClick = {() => setUserRole(0)}>
                    Recruiter
              </Button>
              <Button type="default" disabled icon={<UserOutlined />} onClick = {() => setUserRole(1)}>
                    Candidate
              </Button>
              </div>
              </Form.Item>
          <label className = "field-label">Full Name*</label>
              <Form.Item name = "name" rules={[{ required: true, message: 'This field is mandatory.' }]} >
                  <Input placeholder = "Enter your full name"/>
              </Form.Item>
              <label className = "field-label">Email Address*</label>
              <Form.Item name = "email"  rules={[{ required: true, message: 'This field is mandatory.' }]}>
                  <Input placeholder = "Enter your email"/>
              </Form.Item>
              <div className = "password-group">
                  <div>
              <label className = "field-label">Create Password*</label>
              <Form.Item name = "password" rules={[{ required: true, message: 'This field is mandatory.' }]}>
              <Input.Password placeholder = "Enter your Password"/>
              </Form.Item>
              </div>
              <div>
              <label className = "field-label">Confirm Password*</label>
              <Form.Item name = "confirmPassword" rules={[{ required: true, message: 'This field is mandatory.' }]}>
              <Input.Password placeholder = "Enter your Password"/>
              </Form.Item>
              </div>
              </div>
              <label className = "field-label">Skills</label>
              <Form.Item name = "skills">
              <Input placeholder = "Enter comma separated skills"/>
              </Form.Item>

              <Button className ="btn btn-default" type="primary" htmlType="submit">
                   Sign Up
          </Button>
          </Form>

          <span className= "more-jobs">Have an account? <Link to = "/login" className= "create-account-text" >Login</Link></span>
        </>
    )

}

const SignUpForm = Card(SignUp)

export default SignUpForm