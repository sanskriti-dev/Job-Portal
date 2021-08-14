import React from 'react';
import { Form,Input,Button, notification } from 'antd';
import 'antd/dist/antd.css';
import Card from '../../Common/Card';
import '../access.scss'
import {Link, useHistory} from 'react-router-dom';
import {AuthServices} from '../api/services';
import { useDispatch, useSelector } from 'react-redux';
import { AUTH_SUCCESS } from '../../../store/action/actionTypes';


const Login = (props) => {
    const dispatch = useDispatch();
    const history = useHistory()

    const handleLogin = async (values) => {
        const response = await AuthServices.login(values);
        if(response.data.success)
        {
            history.push('/dashboard')
            dispatch({type : AUTH_SUCCESS,payload : response.data.data})
            notification["success"]({
                message: <strong>LoggedIn Successfully</strong>,
            });
            localStorage.setItem("user" ,JSON.stringify( {
                token : response.data.data.token,
                email :response.data.data.token,
                name : response.data.data.name,
                isLoggedIn : true
            }))

        }

    }
    return (
        <>
        <span className = "title" >Login</span>
          <Form  onFinish = {handleLogin}>
              <label className = "field-label">Email Address</label>
              <Form.Item name = "email">
                  <Input placeholder = "Enter your email"/>
              </Form.Item>
              <div className = "forgot-password-field">
              <label className = "field-label">Password</label>
              <Link to = "/forgot-password" className= "create-account-text" >Forgot your password?</Link>
              </div>
              <Form.Item name = "password">
              <Input.Password placeholder = "Enter your Password"/>
              </Form.Item>
              <Button className ="btn btn-default" type="primary" htmlType="submit">
                   Login
          </Button>
          </Form>

          <span className= "more-jobs">Need to MyJobs? <Link to = "/sign-up" className= "create-account-text" >Create an account</Link></span>
        </>
    )

}

const LoginForm = Card(Login)



export default LoginForm