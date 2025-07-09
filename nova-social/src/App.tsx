import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/homepage';
import RaditProfile from './pages/profile/profilepage';
import MessagePage from './pages/message/messagepage';
import NotificationPage  from './pages/notifications/notificationpage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/RaditProfile" element={<RaditProfile />} />
        <Route path="/Messages" element={<MessagePage />} />
        <Route path="/Notification" element={<NotificationPage />} />
      </Routes>
    </Router>
  );
}