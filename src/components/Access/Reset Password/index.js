import React from 'react';
import { Form,Input,Button } from 'antd';
import 'antd/dist/antd.css';
import Card from '../../Common/Card';
import '../access.scss'
import { useHistory } from 'react-router-dom';

const ResetPassword = () => {

    const history = useHistory()

    console.log(history?.location?.state?.token)


                
    return (
        <>
        <span className = "title">Reset Your Password</span>
        <span className = "extra-text">Enter your new password below.</span>
          <Form>
              <label className = "field-label">New password</label>
              <Form.Item name = "password">
              <Input placeholder = "Enter your Password"/>
              </Form.Item>
            
              <label className = "field-label">Confirm new password</label>
              <Form.Item name = "password">
              <Input placeholder = "Enter your Password"/>
              </Form.Item>
              
              <Button className ="btn btn-default" type="primary" htmlType="submit">
                   Reset
          </Button>
          </Form>
        </>
    )

}

const ResetPasswordForm = Card(ResetPassword)

export default ResetPasswordForm