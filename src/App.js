import './App.css';
import Home from './components/Home';
import Header from './components/Common/Header';
import LoginForm from './components/Access/Login';
import SignUpForm from './components/Access/SignUp';
import ForgotPasswordForm from './components/Access/Forgot Password';
import ResetPasswordForm from './components/Access/Reset Password';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Home/> */}
      {/* <LoginForm/> */}
      {/* <SignUpForm/> */}
      {/* <ForgotPasswordForm/> */}
      <ResetPasswordForm/>
    </div>
  );
}

export default App;
