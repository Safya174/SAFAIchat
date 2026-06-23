import './App.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ChatPage from './pages/Chat Page';
import LandingPage from './pages/landing page';
import SettingPage from './pages/Settings Page';
import { Routes, Route } from 'react-router-dom'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#534AB7',
      light: '#7F77DD',
      dark: '#3C3489',
    },
    secondary: {
      main: '#7F77DD',
    },
    background: {
      default: '#0f0d1a',
      paper: '#13102a',
    },
    text: {
      primary: '#EEEDFE',
      secondary: '#AFA9EC',
      disabled: '#534AB7',
    },
    divider: '#26215C',

    // الألوان الإضافية بتاعت المشروع
    custom: {
      cardBg: '#1a163a',
      activeBg: '#26215C',
      borderSoft: '#26215C',
      borderStrong: '#3C3489',
      mutedText: '#7F77DD',
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* 1. تم تغيير width إلى 100vw بدلاً من 100wh الكارثية
        2. تم تغيير height إلى 100vh بدلاً من auto عشان يملى الشاشة وتطبيق الـ Reset صح
        3. تم تغيير لون الخلفية ليقرأ من السيم مباشرة بدلاً من قيمة مانيوال
      */}
      <Box 
        className='App' 
        sx={{
          width: "100vw", 
          minHeight: "100vh", 
          backgroundColor: 'background.default', 
          padding: 0,
          margin: 0, 
          boxSizing: "border-box"
        }} 
      >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/chat' element={<ChatPage />} />
          <Route path='/settings' element={<SettingPage />} />
        </Routes>
      </Box>
    </ThemeProvider>
  )
}

export default App;