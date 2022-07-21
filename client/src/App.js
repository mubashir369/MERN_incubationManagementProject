import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import UserLoginPage from './pages/User/UserLoginPage';
import SignUpPage from './pages/User/SignUpPage';
import UserDashboardPage from './pages/User/UserDashboardPage';
import IncubationFormPage from './pages/User/IncubationFormPage';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/login' element={<UserLoginPage/>} />
          <Route path='/sign-up' element={<SignUpPage/>}  />
          <Route path='/user-dashboard' element={<UserDashboardPage/>} />
          <Route path='/incubation-form' element={<IncubationFormPage/>}  />  
        </Routes>
      </Router>
    </div>
  );
}

export default App;
