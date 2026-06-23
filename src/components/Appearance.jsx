import * as React from "react";
import FormLabel from "@mui/material/FormLabel";
import Switch from "@mui/material/Switch";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Select, MenuItem } from "@mui/material";
import { useState } from "react";

export default function SwitchesGroup() {
  // 1. تظبيط الـ State بأسماء واضحة ومطابقة للكيبورد
  const [state, setState] = React.useState({
    darkMode: true,
    streamingReplies: false,
    soundEffects: true,
  });
  const [language, setLanguage] = useState("English");

  const handleChangelang = (event) => {
    setLanguage(event.target.value);
  };

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  // 2. ضفنا الـ stateKey لكل عنصر عشان نربطه بالـ State فوق صح
  let feature = [
    {
      id: "1",
      title: "Dark mode",
      description: "Use dark theme across the app",
      stateKey: "darkMode"
    },
    {
      id: 2,
      title: "Streaming replies",
      description: "Show words one by one",
      stateKey: "streamingReplies"
    },
    {
      id: 3,
      title: "Sound effects",
      description: "Play sound on new message",
      stateKey: "soundEffects"
    },
  ];

  let newArray = feature.map((f) => {
    return (
      <Box
        key={f.id}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "20px",
          width: "100%",
          boxSizing: "border-box"
        }}
      >
        <Box>
          <Typography sx={{ color: "text.primary" }}>{f.title}</Typography>
          <Typography sx={{ color: "custom.mutedText" }}>
             {f.description}
          </Typography>
        </Box>
        {/* 3. التعديل هنا: السويتش الحين يقرأ من f.stateKey الديناميكي */}
        <Switch 
          checked={state[f.stateKey]} 
          onChange={handleChange} 
          name={f.stateKey} 
        />
      </Box>
    );
  });

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <PaletteOutlinedIcon
          sx={{ color: "secondary.main", marginRight: "10px" }}
        />
        <FormLabel component="legend" sx={{ color: "text.primary" }}>
          Appearance
        </FormLabel>
      </Box>

      {newArray}

      {/* سطر اللغة */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center", // يخليهم موازيين لبعض في النص بالظبط
          marginTop: "20px",
          width: "100%",
          gap: "15px", // مسافة أمان مستحيل يركبوا فوق بعض بسببها
        }}
      >
        <Box>
          <Typography sx={{ color: "text.primary" }}>Language</Typography>
          <Typography sx={{ color: "custom.mutedText" }}>Interface language</Typography>
        </Box>
        
        {/* 4. التعديل هنا: شيلنا الـ md: "100%" الكارثية وحددنا حجم شيك ثابت */}
        <Select
          value={language}
          onChange={handleChangelang}
          sx={{
            bgcolor: "custom.cardBg", // يقرا من ألوان السيم الدارك الشيك بتاعك بدل الأبيض الفاقع
            color: "text.primary",
            height: "40px",
            width: { xs: "110px", sm: "150px" }, // حجم ريسبونسف ثابت ومستحيل يطير برة البوكس
            borderRadius: "8px",
            "& .MuiSelect-icon": { color: "text.secondary" },
            "& .MuiOutlinedInput-notchedOutline": { borderColor: "custom.borderSoft" },
          }}
        >
          <MenuItem value="English">English</MenuItem>
          <MenuItem value="Arabic">Arabic</MenuItem>
        </Select>
      </Box>
    </>
  );
}