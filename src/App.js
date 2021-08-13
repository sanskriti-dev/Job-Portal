import './App.css';
import Home from './components/Home';
import Header from './components/Common/Header';
import LoginForm from './components/Access/Login';
import SignUpForm from './components/Access/SignUp';
import ForgotPasswordForm from './components/Access/Forgot Password';
import ResetPasswordForm from './components/Access/Reset Password';
import Routes from './routes';
import DashBoard from './components/Recruiter';
import CreateJobForm from './components/Recruiter/dependencies/CreateJob';

function App() {
  return (
    <div className="App">
      <Routes/>
      {/* <Home/> */}
      {/* <LoginForm/> */}
      {/* <SignUpForm/> */}
      {/* <ForgotPasswordForm/> */}
      {/* <ResetPasswordForm/> */}
      {/* <Header/>
      <DashBoard/> */}
    </div>
  );
}

export default App;
