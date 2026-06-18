
import './App.css'
import { createTheme,ThemeProvider } from '@mui/material/styles';
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
         <Box className='App' sx={{width:"100wh",height:"auto",backgroundColor:'#09061B',padding:0,margin:0, boxSizing: "border-box"}} >
          
            <Routes>
              <Route path="/" element={<LandingPage/>}></Route>
              <Route path='/chat' element={<ChatPage/>}></Route>
              <Route path='/settings' element={<SettingPage/>}></Route>
            </Routes>
      
         </Box>

    </ThemeProvider>
    
    
      )
  
    }
export default App