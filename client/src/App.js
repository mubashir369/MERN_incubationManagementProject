import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import UserLoginPage from './pages/User/UserLoginPage';
import SignUpPage from './pages/User/SignUpPage';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/login' element={<UserLoginPage/>} />
          <Route path='/sign-up' element={<SignUpPage/>}  />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
