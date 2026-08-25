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
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
         
export default function ChatList({ mobileOpen, handleDrawerToggle, variant = "permanent", savedChats, deleteChat ,onNewChat,onSelectChat}) {
  let Navigate = useNavigate();
  const { i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  let handleopenSettings = () => {
    Navigate('/settings');
  };

  return (
    <Drawer
      variant={variant}
      open={variant === "temporary" ? mobileOpen : true}
      onClose={handleDrawerToggle}
      anchor={isRtl ? "right" : "left"}
      sx={{
        width: 250,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 250,
          boxSizing: "border-box",
          backgroundColor: "background.paper",
        },
      }}
    >
      <List sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* اللوجو وزرار الهيدر */}
        <ListItem disablePadding>
          <ListItemButton sx={{ gap: 1.5 }}>
            <TipsAndUpdatesIcon sx={{ width: "20px", height: "20px", padding: "10px", borderRadius: "10px", bgcolor: "primary.main", color: "white" }} />
            <ListItemText sx={{ color: "text.primary" }} primary="S A F A I" />
          </ListItemButton>
          <Button   onClick={onNewChat}>New Chat</Button>
        </ListItem>
        <Divider component="li" />

        <Typography component="h4" sx={{ px: 2.5, color: "custom.mutedText", mt: 2, fontSize: "14px", fontWeight: "bold", textAlign: isRtl ? "right" : "left" }}> 
          Today
        </Typography> 

        <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
          {savedChats.map((chat) => (
            <Box
              key={chat.id}
              sx={{
                "&:hover .delete-btn": { opacity: 1 },
              }}
            >
              <ListItem
                disablePadding
                sx={{ color: "text.secondary" }}
                secondaryAction={
                  <IconButton
                    className="delete-btn"
                    edge="end"
                    size="small"
                    sx={{ opacity: 0, transition: "opacity 0.2s", color: "custom.mutedText" }}
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteChat(chat.id);
                    }}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                }
              >
                <ListItemButton onClick={() => onSelectChat(chat)}>
                  <ListItemText primary={chat.title} sx={{ textAlign: isRtl ? "right" : "left" }} />
                </ListItemButton>
              </ListItem>
              <Typography component="h4" sx={{ px: 2.5, color: "custom.mutedText", fontSize: "12px", mb: 1, textAlign: isRtl ? "right" : "left" }}> 
                {chat.time}
              </Typography>
            </Box>
          ))}
        </Box>

        <Divider sx={{ marginTop: "auto" }} />
        
        {/* الحساب الشخصي والأيقونة */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Avatar sx={{ bgcolor: "custom.mutedText" }}>SA</Avatar>
            <Box>
              <Typography component="h4" sx={{ color: "text.primary", fontSize: "12px", fontWeight: "bold" }}> 
                Safya Abdelsalam
              </Typography>
              <Typography component="h4" sx={{ color: "custom.mutedText", fontSize: "12px" }}> 
                Free plan
              </Typography>
            </Box>
          </Box>
          <IconButton onClick={handleopenSettings}>
            <SettingsIcon />
          </IconButton>
           
            
        
        </Box>
      </List>
    </Drawer>
  );
}
