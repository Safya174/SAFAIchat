import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import { useTranslation } from "react-i18next";

export default function Sidebar({ mobileOpen, handleDrawerToggle, variant = "permanent", activeTab, setActiveTab }) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

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
      <List>
        {/* اللوجو */}
        <ListItem disablePadding sx={{ mb: 2 }}>
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

        {/* عنوان قسم الإعدادات */}
        <Typography
          component="h4"
          sx={{
            px: 2.5,
            color: "text.secondary",
            mb: 1,
            fontSize: "12px",
            fontWeight: "bold",
            textAlign: isRtl ? "right" : "left",
          }}
        >
          {t("settings.sidebar.settings_group")}
        </Typography>

        {/* 1. AI Personas */}
        <ListItem disablePadding sx={{ color: "text.secondary" }}>
          <ListItemButton
            selected={activeTab === "personas"}
            onClick={() => setActiveTab && setActiveTab("personas")}
            sx={{ gap: 1 }}
          >
            <ListItemIcon sx={{ minWidth: "auto" }}>
              <SmartToyIcon sx={{ color: "primary.main" }} />
            </ListItemIcon>
            <ListItemText
              primary={t("settings.sidebar.ai_personas")}
              sx={{ textAlign: isRtl ? "right" : "left" }}
            />
          </ListItemButton>
        </ListItem>

        {/* 2. Appearance */}
        <ListItem disablePadding sx={{ color: "text.secondary" }}>
          <ListItemButton
            selected={activeTab === "appearance"}
            onClick={() => setActiveTab && setActiveTab("appearance")}
            sx={{ gap: 1 }}
          >
            <ListItemIcon sx={{ minWidth: "auto" }}>
              <PaletteOutlinedIcon sx={{ color: "primary.main" }} />
            </ListItemIcon>
            <ListItemText
              primary={t("settings.sidebar.appearance")}
              sx={{ textAlign: isRtl ? "right" : "left" }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}