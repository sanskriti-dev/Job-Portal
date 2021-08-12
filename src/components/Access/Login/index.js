import React from 'react';
import { Form,Input,Button } from 'antd';
import 'antd/dist/antd.css';
import Card from '../../Common/Card';
import '../access.scss'

const Login = () => {
                
    return (
        <>
        <span className = "title">Login</span>
          <Form>
              <label className = "field-label">Email Address</label>
              <Form.Item name = "email">
                  <Input placeholder = "Enter your email"/>
              </Form.Item>
              <label className = "field-label">Password</label>
              <Form.Item name = "password">
              <Input placeholder = "Enter your Password"/>
              </Form.Item>
              <Button className ="btn btn-default" type="primary" htmlType="submit">
                   Login
          </Button>
          </Form>

          <span className= "more-jobs">Need to MyJobs? <span className= "create-account-text" >Create an account</span></span>
        </>
    )

}

const LoginForm = Card(Login)

export default LoginForm