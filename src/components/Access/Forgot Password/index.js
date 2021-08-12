import React from 'react';
import { Form,Input,Button } from 'antd';
import 'antd/dist/antd.css';
import Card from '../../Common/Card';
import '../access.scss'

const ForgotPassword = () => {
                
    return (
        <>
        <span className = "title">Forgot your password?</span>
        <span className = "extra-text">Enter the email associated with your account and we’ll send you instructions to reset your password.</span>
          <Form>
              <label className = "field-label">Email Address</label>
              <Form.Item name = "email">
                  <Input placeholder = "Enter your email"/>
              </Form.Item>
            
              <Button className ="btn btn-default" type="primary" htmlType="submit">
                   Submit
          </Button>
          </Form>
        </>
    )

}

const ForgotPasswordForm = Card(ForgotPassword)

export default ForgotPasswordForm