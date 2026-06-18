import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import SettingsIcon from '@mui/icons-material/Settings';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom'
export default function ChatList() {
  let Navigate = useNavigate();
  let handleopenSettings = ()=>{
    Navigate('/settings')
  }
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 250,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 250,
          boxSizing: "border-box",
          backgroundColor: "background.paper", // حطينا اللون هنا عشان يغطي السايدبار كله
        },
      }}
    >
      <List>
        {/* اللوجو وزرار الهيدر */}
        <ListItem disablePadding >
          <ListItemButton>
            <TipsAndUpdatesIcon sx={{ width: "20px", height: "20px", padding: "10px", borderRadius: "10px", bgcolor: "primary.main", color: "white" }} />
            <ListItemText sx={{ color: "text.primary", marginLeft: "15px" }} primary="S A F A I" />
          </ListItemButton>
        </ListItem>
         <Divider component="li" />
        {/* قسم الإعدادات */}
        <Typography component="h4" sx={{ marginLeft: "20px", color: "custom.mutedText", mt: 2, fontSize: "17px" }}> 
          Today
        </Typography> 

        <ListItem disablePadding sx={{ color: "text.secondary" }}>
          <ListItemButton>
           
            <ListItemText primary="How do circuits work?" />
            
          </ListItemButton>
        </ListItem>
         <Typography component="h4" sx={{ marginLeft: "20px", color: "custom.mutedText", fontSize: "12px" }}> 
          2 min ago
        </Typography>      
          <ListItem disablePadding sx={{ color: "text.secondary" }}>
          <ListItemButton>
           
            <ListItemText primary="How do circuits work?" />
            
          </ListItemButton>
        </ListItem>
         <Typography component="h4" sx={{ marginLeft: "20px", color: "custom.mutedText", fontSize: "12px" }}> 
          2 min ago
        </Typography>
            <ListItem disablePadding sx={{ color: "text.secondary" }}>
          <ListItemButton>
           
            <ListItemText primary="Explain 5G technology ?" />
            
          </ListItemButton>
        </ListItem>
         <Typography component="h4" sx={{  color: "custom.mutedText", fontSize: "12px" }}> 
          1 hour ago
        </Typography>
        <Divider sx={{marginTop:"20px"}}></Divider>
        <Box sx={{display:"flex",justifyContent:"space-around",marginTop:"30px"}}>
        <Avatar
        sx={{ bgcolor:"custom.mutedText" }}
        alt="Remy Sharp"
        src="/broken-image.jpg"
      >
        AM
        </Avatar>
        <Box>
        <Typography component="h4" sx={{  color: "custom.mutedText", fontSize: "12px" }}> 
           Ahmed Mohmed
        </Typography>
         <Typography component="h4" sx={{  color: "custom.mutedText", fontSize: "12px" }}> 
          Free plan
        </Typography>
                  
        </Box>
        <IconButton onClick={handleopenSettings}>
           <SettingsIcon></SettingsIcon>
        </IconButton>
        
        </Box>
       
      </List>
    </Drawer>
  );
}