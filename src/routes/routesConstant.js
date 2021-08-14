
import LoginForm from '../components/Access/Login';
import SignUpForm from '../components/Access/SignUp';
import ForgotPasswordForm from '../components/Access/Forgot Password';
import ResetPasswordForm from '../components/Access/Reset Password';
import Home from '../components/Home';
import DashBoard from '../components/Recruiter';
import CreateJobForm from '../components/Recruiter/dependencies/CreateJob';

export const URL = {
    "LOGIN" : "/login",
    "SIGNUP": "/sign-up",
    "FORGOT_PASSWORD" : "/forgot-password",
    "RESET_PASSWORD" : "/reset-password",
    "RECRUITER_DASHBOARD" : "/dashboard",
    "CREATE_JOB" : "/create-job"
};

export const publicRoute = [
    {
        path: `/`,
        component: Home,
        exact: true,
    },
    {
        path: `${URL.LOGIN}`,
        component: LoginForm,
        exact: true,
    },
    {
        path: `${URL.SIGNUP}`,
        component: SignUpForm,
        exact: true,
    },
    {
        path: `${URL.FORGOT_PASSWORD}`,
        component: ForgotPasswordForm,
        exact: true,
    },
    {
        path: `${URL.RESET_PASSWORD}`,
        component: ResetPasswordForm,
        exact: true,
    },
    {
        path: `*`,
        component: Home,
        exact: false,
    },

]

export const mainRoutes = [
   
    {
        path: `${URL.RECRUITER_DASHBOARD}`,
        component: DashBoard,
        exact: true,
    },
   
    
    {
        path: `${URL.CREATE_JOB}`,
        component: CreateJobForm,
        exact: true,
    },
    {
        path: `*`,
        component: DashBoard,
        exact: false,
        isPrivate: true
    },
];
