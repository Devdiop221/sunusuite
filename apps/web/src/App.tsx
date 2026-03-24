import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/Landing';
import ChatPage from './pages/SunuChat';
import DocsPage from './pages/SunuDocs';
import MeetPage from './pages/SunuMeet';
import AuthPage from './pages/Auth';

function App() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Navigate to="/" replace />} />
            <Route path="/login" element={<AuthPage mode="login" />} />
            <Route path="/signup" element={<AuthPage mode="signup" />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/docs" element={<DocsPage />} />
            <Route path="/meet" element={<MeetPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}

export default App;
