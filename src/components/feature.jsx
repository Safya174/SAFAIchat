import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import HistoryIcon from '@mui/icons-material/History';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTranslation } from "react-i18next";


export default function BasicCard() {
  const { t } = useTranslation();
  let feature = [
  { id: "1", title: t("features.fast_replies_title"), description: t("features.fast_replies_desc"), icon: FlashOnIcon },
  { id: 2, title: t("features.chat_history_title"),  description: t("features.chat_history_desc"), icon: HistoryIcon },
  { id: 3, title: t("features.ai_personas_title") , description: t("features.ai_personas_desc"), icon: SmartToyIcon },
  { id: 4, title:t("features.dark_mode_title") , description:t("features.dark_mode_desc"), icon: DarkModeIcon },
];
  let featuremap = feature.map((f) => {
    let Icon = f.icon;
    return (
      <Card 
        key={f.id} 
        sx={{ 
          borderRadius: "16px", 
          display: "flex",
          width: { xs: '100%', sm: 'calc(50% - 15px)', md: 'calc(25% - 15px)' },
          minWidth: { xs: '100%', sm: '250px' } 
        }}
      >
        <CardContent sx={{ textAlign: "center", bgcolor: 'custom.cardBg', width: '100%' }}> 
          <Icon sx={{ color: "primary.light", fontSize: "50px", borderRadius: "30%", height: "50px", width: '50px', bgcolor: "custom.activeBg", padding: "10px" }} />
          <Typography gutterBottom sx={{ color: 'text.primary', fontSize: { xs: 24, md: 30 } }}>
            {f.title}
          </Typography>
          <Typography variant="body1" sx={{ color: "custom.mutedText" }}>
            {f.description}
          </Typography>
        </CardContent>
      </Card>
    );
  });

  return (
    <Box
      sx={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: "15px", 
        justifyContent: "center", 
        padding: "20px",
        overflowX: 'hidden',
      
      }}
    >
      {featuremap}
    </Box>
  );
}