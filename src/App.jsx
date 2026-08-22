import './App.css'
import Box from '@mui/material/Box';
import ChatPage from './pages/Chat Page';
import LandingPage from './pages/landing page';
import SettingPage from './pages/Settings Page';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Box
      className="App"
      sx={{
        width: "100vw",
        minHeight: "100vh",
        backgroundColor: "background.default",
        padding: 0,
        margin: 0,
        boxSizing: "border-box",
      }}
    >
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/settings" element={<SettingPage />} />
      </Routes>
    </Box>
  );
}
export default App;