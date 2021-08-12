import './App.css';
import Home from './components/Home';
import Header from './components/Common/Header';
import LoginForm from './components/Access/Login';
import SignUpForm from './components/Access/SignUp';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Home/> */}
      {/* <LoginForm/> */}
      <SignUpForm/>
    </div>
  );
}

export default App;
