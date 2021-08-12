import React from 'react';
import { Form,Input,Button } from 'antd';
import 'antd/dist/antd.css';
import Card from '../../Common/Card';
import '../access.scss'

const SignUp = () => {
                
    return (
        <>
        <span className = "title">Sign Up</span>
          <Form>
          <label className = "field-label">Full Name</label>
              <Form.Item name = "name">
                  <Input placeholder = "Enter your full name"/>
              </Form.Item>
              <label className = "field-label">Email Address</label>
              <Form.Item name = "email">
                  <Input placeholder = "Enter your email"/>
              </Form.Item>
              <div className = "password-group">
                  <div>
              <label className = "field-label">Create Password</label>
              <Form.Item name = "password">
              <Input placeholder = "Enter your Password"/>
              </Form.Item>
              </div>
              <div>
              <label className = "field-label">Confirm Password</label>
              <Form.Item name = "password">
              <Input placeholder = "Enter your Password"/>
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

          <span className= "more-jobs">Have an account? <span className= "create-account-text" >Login</span></span>
        </>
    )

}

const SignUpForm = Card(SignUp)

export default SignUpForm