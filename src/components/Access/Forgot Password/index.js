import React from 'react';
import { Form,Input,Button, notification, message } from 'antd';
import 'antd/dist/antd.css';
import Card from '../../Common/Card';
import '../access.scss'
import { AuthServices } from '../api/services';
import {useHistory } from 'react-router-dom';

const ForgotPassword = (props) => {
    let history = useHistory()

    const handleResetPassword = async (values) => {
      
        const response = await AuthServices.resetPassword(values?.email);
        if(response.data.success)
        {
            const verifyResponse = await AuthServices.verifyPasstoken(response.data.data.token);
            if(verifyResponse.data.success)
            history.push('/reset-password')
        }   
}             
    return (
        <>
        <span className = "title">Forgot your password?</span>
        <span className = "extra-text">Enter the email associated with your account and we’ll send you instructions to reset your password.</span>
          <Form onFinish = {handleResetPassword}>
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