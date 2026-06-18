import Box from '@mui/material/Box';
import ChatList from '../components/ChatList';
import ChatArea from '../components/ChatArea';
export default function ChatPage(){
    return(
        <Box sx={{display:"flex"}}> 
          <ChatList></ChatList>
          <ChatArea></ChatArea>
        </Box>
    )
}