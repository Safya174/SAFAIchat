import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import { useTranslation } from "react-i18next";

export default function Sidebar({ mobileOpen, handleDrawerToggle, variant = "permanent" }) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  return (
    <Drawer
      variant={variant}
      open={variant === "temporary" ? mobileOpen : true}
      onClose={handleDrawerToggle}
      anchor={isRtl ? "right" : "left"} // ينقل السايدبار لليمين في العربية
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
      <List>
        {/* اللوجو */}
        <ListItem disablePadding>
          <ListItemButton sx={{ gap: 2 }}>
            <TipsAndUpdatesIcon
              sx={{
                width: "20px",
                height: "20px",
                padding: "10px",
                borderRadius: "10px",
                bgcolor: "primary.main",
                color: "white",
              }}
            />
            <ListItemText
              primary="S A F A I"
              sx={{ color: "text.primary", textAlign: isRtl ? "right" : "left" }}
            />
          </ListItemButton>
        </ListItem>

        {/* قسم الإعدادات */}
        <Typography
          component="h4"
          sx={{
            px: 2.5,
            color: "text.secondary",
            mt: 2,
            fontSize: "12px",
            fontWeight: "bold",
            textAlign: isRtl ? "right" : "left",
          }}
        >
          {t("settings.sidebar.settings_group")}
        </Typography>

        <ListItem disablePadding sx={{ color: "text.secondary" }}>
          <ListItemButton sx={{ gap: 1 }}>
            <ListItemIcon sx={{ minWidth: "auto" }}>
              <PersonOutlineOutlinedIcon sx={{ color: "primary.main" }} />
            </ListItemIcon>
            <ListItemText
              primary={t("settings.sidebar.profile")}
              sx={{ textAlign: isRtl ? "right" : "left" }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{ color: "text.secondary" }}>
          <ListItemButton sx={{ gap: 1 }}>
            <ListItemIcon sx={{ minWidth: "auto" }}>
              <SmartToyIcon sx={{ color: "primary.main" }} />
            </ListItemIcon>
            <ListItemText
              primary={t("settings.sidebar.ai_personas")}
              sx={{ textAlign: isRtl ? "right" : "left" }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{ color: "text.secondary" }}>
          <ListItemButton sx={{ gap: 1 }}>
            <ListItemIcon sx={{ minWidth: "auto" }}>
              <PaletteOutlinedIcon sx={{ color: "primary.main" }} />
            </ListItemIcon>
            <ListItemText
              primary={t("settings.sidebar.appearance")}
              sx={{ textAlign: isRtl ? "right" : "left" }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{ color: "text.secondary" }}>
          <ListItemButton sx={{ gap: 1 }}>
            <ListItemIcon sx={{ minWidth: "auto" }}>
              <NotificationsNoneOutlinedIcon sx={{ color: "primary.main" }} />
            </ListItemIcon>
            <ListItemText
              primary={t("settings.sidebar.notifications")}
              sx={{ textAlign: isRtl ? "right" : "left" }}
            />
          </ListItemButton>
        </ListItem>

        {/* قسم الحساب */}
        <Typography
          component="h4"
          sx={{
            px: 2.5,
            color: "text.secondary",
            mt: 4,
            fontSize: "12px",
            fontWeight: "bold",
            textAlign: isRtl ? "right" : "left",
          }}
        >
          {t("settings.sidebar.account_group")}
        </Typography>

        <ListItem disablePadding sx={{ color: "text.secondary" }}>
          <ListItemButton sx={{ gap: 1 }}>
            <ListItemIcon sx={{ minWidth: "auto" }}>
              <LockOutlinedIcon sx={{ color: "primary.main" }} />
            </ListItemIcon>
            <ListItemText
              primary={t("settings.sidebar.privacy")}
              sx={{ textAlign: isRtl ? "right" : "left" }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{ color: "text.secondary" }}>
          <ListItemButton sx={{ gap: 1 }}>
            <ListItemIcon sx={{ minWidth: "auto" }}>
              <DeleteOutlineOutlinedIcon sx={{ color: "primary.main" }} />
            </ListItemIcon>
            <ListItemText
              primary={t("settings.sidebar.delete_data")}
              sx={{ textAlign: isRtl ? "right" : "left" }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}