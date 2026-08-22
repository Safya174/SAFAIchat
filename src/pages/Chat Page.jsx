import Box from '@mui/material/Box';
import ChatList from '../components/ChatList';
import ChatArea from '../components/ChatArea';
import { useState, useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function ChatPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  let theme = useTheme();
  let isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [allChats, setAllChats] = useState(() => {
    const localData = localStorage.getItem("allChats");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("allChats", JSON.stringify(allChats));
  }, [allChats]);

  const deleteChat = (chatId) => {
    setAllChats((prevChats) => prevChats.filter((chat) => chat.id !== chatId));
  };

  return (
    <Box sx={{ display: "flex", width: "100vw", height: "100vh", overflow: "hidden" }}> 
      <ChatList
        variant={isMobile ? "temporary" : "permanent"}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        savedChats={allChats}
        deleteChat={deleteChat}
      />
      <ChatArea
        onMenuClick={handleDrawerToggle}
        allChats={allChats}
        setAllChats={setAllChats}
      />
    </Box>
  );
}