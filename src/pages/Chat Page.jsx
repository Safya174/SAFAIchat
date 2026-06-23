import Box from '@mui/material/Box';
import ChatList from '../components/ChatList';
import ChatArea from '../components/ChatArea';
import { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
export default function ChatPage(){
    const [mobileOpen, setMobileOpen] = useState(false);
    let theme = useTheme();
    let isMobile = useMediaQuery(theme.breakpoints.down("md"))
    const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
    return(
        <Box sx={{display:"flex",flexGrow:1,overflowX:"hidden"}}> 
          <ChatList variant={ isMobile ? "temporary" : "permanent"} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}></ChatList>
          <ChatArea onMenuClick={handleDrawerToggle} />
        </Box>
    )
}