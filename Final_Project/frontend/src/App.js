import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';
import SkillsPage from './components/SkillsPage';
import CertificationsPage from './components/CertificationsPage'


function App() {
  return (
    <Router> {/* Only one top-level Router */}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/user/skills" element={<SkillsPage />} />
        <Route path="/user/certifications" element={<CertificationsPage />} />
      </Routes>
    </Router>
  );
}

export default App;


