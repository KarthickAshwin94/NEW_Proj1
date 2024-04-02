import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';
import SkillsPage from './components/SkillsPage';
import CertificationsPage from './components/CertificationsPage';
import  ProjectsPage from './components/ProjetcsPage';
import ForgotPasswordPage from './components/ForgotPasswordPage';
function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/user" element={<UserDashboard />} />
      <Route path="/user/skills" element={<SkillsPage />} />
      <Route path="/user/certifications" element={<CertificationsPage />} />
      <Route path="/user/certifications" element={<CertificationsPage />} />
      <Route path="/user/projects" element={<ProjectsPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />


    </Routes>
  );
}

export default App;
