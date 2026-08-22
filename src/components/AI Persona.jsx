import { Grid, Typography } from '@mui/material';
import PsychologyIcon from '@mui/icons-material/Psychology';
import CodeIcon from '@mui/icons-material/Code';
import SettingsInputAntennaIcon from '@mui/icons-material/SettingsInputAntenna';
import CreateIcon from '@mui/icons-material/Create';
import Card from '@mui/material/Card';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function AIpersona() {
  const { t } = useTranslation(); // 2. تفعيل التابع t
  const [activeMode, setActiveMode] = useState(localStorage.getItem("chatMode") || "general");
  
  // 3. ربط النصوص بالمفاتيح الموجودة في ملفات الترجمة
  const feature = [
    { 
      id: "general", 
      title: t("settings.personas.general_title"), 
      description: t("settings.personas.general_desc"), 
      icon: PsychologyIcon 
    },
    { 
      id: "programming", 
      title: t("settings.personas.developer_title"), 
      description: t("settings.personas.developer_desc"), 
      icon: CodeIcon 
    },
    { 
      id: "telecom", 
      title: t("settings.personas.engineer_title"), 
      description: t("settings.personas.engineer_desc"), 
      icon: SettingsInputAntennaIcon 
    },
    { 
      id: "writing", 
      title: t("settings.personas.writer_title"), 
      description: t("settings.personas.writer_desc"), 
      icon: CreateIcon 
    },
  ];

  const newArray = feature.map((f) => {
    const Icon = f.icon;
    const isSelected = activeMode === f.id;
    return (
      <Grid item xs={6} key={f.id}>
        <Card 
          sx={{
            minWidth: { sm: "100%", md: "275px" },
            borderRadius: "16px",
            textAlign: "center",
            padding: "15px",
            cursor: "pointer",
            border: isSelected ? "2px solid" : "1.5px solid",
            borderColor: isSelected ? "primary.main" : "custom.borderSoft",
            bgcolor: isSelected ? "custom.activeBg" : "custom.cardBg",
            transition: "all 0.3s ease",
            "&:hover": {
              bgcolor: "custom.activeBg",
              borderColor: "primary.main"
            },
          }}
          onClick={() => {
            localStorage.setItem("chatMode", f.id);
            setActiveMode(f.id);
          }}
        >
          <Icon sx={{ color: "primary.light", fontSize: "50px", height: "50px", width: '50px', padding: "10px" }} />
          <Typography sx={{ fontWeight: "bold", color: "text.primary" }}>{f.title}</Typography>
          <Typography sx={{ color: "custom.mutedText" }}>{f.description}</Typography>
        </Card>
      </Grid>
    );
  });

  return (
    <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }} spacing={1.5}>
      {newArray}
    </Grid>
  );
}