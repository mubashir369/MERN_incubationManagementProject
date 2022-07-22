import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import UserLoginPage from "./pages/User/UserLoginPage";
import SignUpPage from "./pages/User/SignUpPage";
import UserDashboardPage from "./pages/User/UserDashboardPage";
import IncubationFormPage from "./pages/User/IncubationFormPage";
import AdminLoginPage from "./pages/Admin/AdminLoginPage";
import AdminDashboardPage from "./pages/Admin/AdminDashboardPage";
import Application from "./store/ApplicationContext";
import ApprovedFormsPage from "./pages/Admin/ApprovedFormsPage";
import DeclineForm from "./pages/Admin/DeclineForm";
function App() {
  return (
    <div>
      <Application>
        <Router>
          <Routes>
            <Route path="/" element={<UserLoginPage />} />
            <Route path="/login" element={<UserLoginPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/user-dashboard" element={<UserDashboardPage />} />
            <Route path="/incubation-form" element={<IncubationFormPage />} />
            <Route path="/admin-login" element={<AdminLoginPage />} />
          </Routes>
          <Routes>
          <Route path="/admin" element={<AdminLoginPage />} />
            <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
            <Route path="/approved-forms" element={<ApprovedFormsPage/>}  />
            <Route path="/decline-forms" element={<DeclineForm/>} />
          </Routes>
        </Router>
      </Application>
    </div>
  );
}

export default App;
