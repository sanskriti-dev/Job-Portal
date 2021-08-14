import React from 'react';
import { Form,Input,Button, notification } from 'antd';
import 'antd/dist/antd.css';
import Card from '../../Common/Card';
import '../access.scss'
import { useHistory } from 'react-router-dom';
import { AuthServices } from '../api/services';

const ResetPassword = () => {

    const history = useHistory()

    let token = history?.location?.state?.token
    console.log("hist",history)

    const handleChangePassword = async(values) => {
        const data = values;
        data.token = token
        try {
        const response = await AuthServices.changePassword(data)
        if(response.data) {
            notification["success"] ({
                message : response.data.message
            })
            if(response.data.success)
             history.push('/login')
        }

    } catch(err) {
        notification["error"]({
            message : err.response.data.message
        })
    }}
    

                
    return (
        <>
        <span className = "title">Reset Your Password</span>
        <span className = "extra-text">Enter your new password below.</span>
          <Form onFinish = {handleChangePassword}>
              <label className = "field-label">New password</label>
              <Form.Item name = "password" rules={[{ required: true, message: 'This field is mandatory.' }]}>
              <Input placeholder = "Enter your Password"/>
              </Form.Item>
            
              <label className = "field-label">Confirm new password</label>
              <Form.Item name = "confirmPassword" rules={[{ required: true, message: 'This field is mandatory.' }]}>
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