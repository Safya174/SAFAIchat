import Sidebar from "../components/Sidebar";
import AIPersona from "../components/AI Persona";
import Appearance from '../components/Appearance';
import { Box, Typography } from "@mui/material"; // استغنينا عن الـ Grid الأب واستخدمنا Box Flexbox أقوى وأنظف
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { useState } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import MenuIcon from "@mui/icons-material/Menu";

export default function SettingPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  
  let theme = useTheme();
  let isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box 
      sx={{ 
        display: "flex", 
        width: "100vw", 
        minHeight: "100vh", 
        backgroundColor: "background.default",
        overflowX: "hidden"
      }}
    >
      
      {/* 2. مكون السايدبار */}
      <Sidebar 
        variant={isMobile ? "temporary" : "permanent"} 
        mobileOpen={mobileOpen} 
        handleDrawerToggle={handleDrawerToggle} 
      />

      {/* 3. محتوى الإعدادات (الـ Main Content) */}
      {/* الـ Box ده هياخد كل المساحة الفاضية الباقية على يمين السايدبار غصب عنه ومستحيل يدخل وراه الحين */}
      <Box 
        component="main"
        sx={{ 
          flexGrow: 1, 
          width: "100%",
          padding: { xs: "20px", md: "40px 60px" }, 
          boxSizing: "border-box" 
        }}
      >
        {/* زرار المنيو يظهر في الموبايل بس */}
        {isMobile && (
          <IconButton
            color="inherit"
            onClick={handleDrawerToggle}
            sx={{ color: "white", marginBottom: "20px", p: 0 }}
          >
            <MenuIcon />
          </IconButton>
        )}

        {/* العناوين الأساسية */}
        <Typography sx={{ color: 'text.primary', fontSize: "28px", fontWeight: "bold" }}>
          Settings
        </Typography>
        <Typography sx={{ color: "secondary.main", marginBottom: "30px" }}>
          Customize your Nova AI experience
        </Typography>

        {/* بوكس الـ AI Persona الداخلي */}
        <Box sx={{
          backgroundColor: "background.paper",
          padding: "25px",
          borderRadius: "12px",
          border: "0.5px solid",
          borderColor: "divider",
          width: "100%",
          maxWidth: "800px", // يمنعه إنه يفرش بزيادة في الشاشات العريضة أوي
          boxSizing: "border-box",
          marginBottom: "30px"
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <SmartToyIcon sx={{ marginRight: '10px', color: "secondary.main" }} />
            <Typography sx={{ color: 'text.primary', fontSize: "20px", fontWeight: "600" }}>
              AI Persona
            </Typography>
          </Box>
          <AIPersona />
        </Box>

        {/* بوكس الـ Appearance الداخلي */}
        <Box sx={{
          backgroundColor: "background.paper",
          padding: "25px",
          borderRadius: "12px",
          border: "0.5px solid",
          borderColor: "divider",
          width: "100%",
          maxWidth: "800px", // يخليه بنفس عرض البوكس اللي فوقه بالظبط
          boxSizing: "border-box"
        }}>
          <Appearance />
        </Box>
       
      </Box>
    </Box>
  )
}