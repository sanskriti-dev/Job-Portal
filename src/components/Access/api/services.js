import axios from 'axios';
import {ROOT_URL} from '../../../constants/index'

class AuthService {
    login = (data) => {
         return axios.post(`${ROOT_URL}/auth/login`,data)
    }
    signUp = (data) => {
        return axios.post(`${ROOT_URL}/auth/register`,data)

    }
    resetPassword = (data) => {
        return axios.get(`${ROOT_URL}/auth/resetpassword?email=${data}`)
    }
    verifyPasstoken = (data) => {
        return axios.get(`${ROOT_URL}/auth/resetpassword/${data}`)
    }
}

export const AuthServices = new AuthService()

