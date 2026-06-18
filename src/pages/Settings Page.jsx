import Sidebar from "../components/Sidebar";
import AIPersona from "../components/AI Persona";
import Appearance from '../components/Appearance';
import { Grid, Box, Typography } from "@mui/material";
import SmartToyIcon from '@mui/icons-material/SmartToy';

export default function SettingPage() {
  return (
    
    
    <Grid container spacing={1}>
      <Grid size={4}>
        <Sidebar />
      </Grid>
      <Grid size={6}>
        <Typography sx={{ color: 'text.primary', fontSize: "25px",fontWeight:"bold" ,marginTop:"30px"}}>Settings</Typography>
         <Typography sx={{  color: "secondary.main" }}>Customize your Nova AI experience</Typography>
        <Box sx={{
          backgroundColor: "background.paper",
          marginTop: "20px",
          padding: "20px",
          borderRadius: "10px",
          border: "0.5px solid",
          borderColor: "divider",
        }}>
          <Box sx={{ display: 'flex', marginLeft: "20px", marginBottom: '15px' }}>
            <SmartToyIcon sx={{ marginRight: '10px', color: "secondary.main" }} />
            <Typography sx={{ color: 'text.primary', fontSize: "20px" }}>
              AI Persona
            </Typography>
          </Box>
          <AIPersona />
        </Box>
          <Box sx={{
          backgroundColor: "background.paper",
          marginTop: "30px",
          padding: "20px",
          borderRadius: "10px",
          border: "0.5px solid",
          borderColor: "divider",
        }}>
           <Appearance />
        </Box>
       
      </Grid>
    </Grid>
    
  )
}