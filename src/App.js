import './App.css';
import Home from './components/Home';
import Header from './components/Common/Header';
import LoginForm from './components/Access/Login';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Home/> */}
      <LoginForm/>
    </div>
  );
}

export default App;
