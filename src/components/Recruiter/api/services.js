import axios from 'axios';
import {ROOT_URL} from '../../../constants/index'

class RecruiterService {
    createJob = (data,token) => {
         return axios.post(`${ROOT_URL}/jobs/`,data,{
            headers: {
              'Authorization': `${token}` 
            }})
    }
    getPostedJobs = (token) => {
        return axios.get(`${ROOT_URL}/recruiters/jobs`,{
            headers: {
              'Authorization': `${token}` 
            }})
    }

    getApplicantsForJob = (id,token) => {
        return axios.get(`${ROOT_URL}/recruiters/jobs/${id}/candidates`,{
            headers: {
              'Authorization': `${token}` 
            }})

    }
  
}

export const RecruiterServices = new RecruiterService()

