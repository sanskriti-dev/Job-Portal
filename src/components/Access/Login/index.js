import React from 'react';
import { Form,Input,Button, notification, message } from 'antd';
import 'antd/dist/antd.css';
import Card from '../../Common/Card';
import '../access.scss'
import {Link, withRouter} from 'react-router-dom';
import {AuthServices} from '../api/services';


const Login = (props) => {
    const handleLogin = async (values) => {
        const response = await AuthServices.login(values);
        console.log(response)
        if(response.data.success)
        {
            notification["success"]({
                message: <strong>LoggedIn Successfully</strong>,
            });

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

const mapStatetoProps = () => {

}

const mapDispatchtoProps =() => {

}

export default  withRouter(LoginForm)