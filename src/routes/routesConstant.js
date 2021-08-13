
import LoginForm from '../components/Access/Login';
import SignUpForm from '../components/Access/SignUp';
import ForgotPasswordForm from '../components/Access/Forgot Password';
import ResetPasswordForm from '../components/Access/Reset Password';
import Home from '../components/Home';

export const URL = {
    "LOGIN" : "/login",
    "SIGNUP": "/sign-up",
    "FORGOT_PASSWORD" : "/forgot-password",
    "RESET_PASSWORD" : "/reset-password"
};

export const publicRoute = [
    {
        path: `/`,
        component: Home,
        exact: true,
        public:true,
    },
    {
        path: `${URL.LOGIN}`,
        component: LoginForm,
        exact: true,
        public:true,
    },
    {
        path: `${URL.SIGNUP}`,
        component: SignUpForm,
        exact: true,
        public:true,
    },
    {
        path: `${URL.FORGOT_PASSWORD}`,
        component: ForgotPasswordForm,
        exact: true,
        public:true,
    },

]

export const mainRoutes = [
    {
        path: `/`,
        component: Home,
        exact: true,
    },
    {
        path: `${URL.RESET_PASSWORD}`,
        component: ResetPasswordForm,
        exact: true,
        public:true,
    },
   
    // {
    //     path: `*`,
    //     component: NoPageFound,
    //     exact: false,
    //     isPrivate: true
    // },
];
