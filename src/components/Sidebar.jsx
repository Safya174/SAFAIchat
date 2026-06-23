import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ListItemIcon from '@mui/material/ListItemIcon';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import Typography from '@mui/material/Typography';

export default function Sidebar({ mobileOpen, handleDrawerToggle, variant = "permanent" }) {
  return (
    <Drawer
      variant={variant}
      open={variant == "temporary"? mobileOpen : true}
      onClose={handleDrawerToggle}
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
        <ListItem disablePadding>
          <ListItemButton>
            <TipsAndUpdatesIcon sx={{ width: "20px", height: "20px", padding: "10px", borderRadius: "10px", bgcolor: "primary.main", color: "white" }} />
            <ListItemText sx={{ color: "text.primary", marginLeft: "15px" }} primary="S A F A I" />
          </ListItemButton>
        </ListItem>

        {/* قسم الإعدادات */}
        <Typography component="h4" sx={{ marginLeft: "20px", color: "text.secondary", mt: 2, fontSize: "12px", fontWeight: "bold" }}> 
          SETTINGS
        </Typography> 

        <ListItem disablePadding sx={{ color: "text.secondary" }}>
          <ListItemButton>
            <ListItemIcon>
              <PersonOutlineOutlinedIcon sx={{ color: "primary.main" }} />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{ color: "text.secondary" }}>
          <ListItemButton>
            <ListItemIcon>
              <SmartToyIcon sx={{ color: "primary.main" }} />
            </ListItemIcon>
            <ListItemText primary="AI Personas" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{ color: "text.secondary" }}>
          <ListItemButton>
            <ListItemIcon>
              <PaletteOutlinedIcon sx={{ color: "primary.main" }} />
            </ListItemIcon>
            <ListItemText primary="Appearance" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{ color: "text.secondary" }}>
          <ListItemButton>
            <ListItemIcon>
              <NotificationsNoneOutlinedIcon sx={{ color: "primary.main" }} />
            </ListItemIcon>
            <ListItemText primary="Notifications" />
          </ListItemButton>
        </ListItem>

        {/* قسم الحساب */}
        <Typography component="h4" sx={{ color: "text.secondary", marginLeft: "20px", mt: 4, fontSize: "12px", fontWeight: "bold" }}> 
          ACCOUNT
        </Typography>

        <ListItem disablePadding sx={{ color: "text.secondary" }}>
          <ListItemButton>
            <ListItemIcon>
              <LockOutlinedIcon sx={{ color: "primary.main" }} />
            </ListItemIcon>
            <ListItemText primary="Privacy" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{ color: "text.secondary" }}>
          <ListItemButton>
            <ListItemIcon>
              <DeleteOutlineOutlinedIcon sx={{ color: "primary.main" }} />
            </ListItemIcon>
            <ListItemText primary="Delete data" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}