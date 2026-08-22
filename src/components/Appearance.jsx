
import FormLabel from "@mui/material/FormLabel";
import Switch from "@mui/material/Switch";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Select, MenuItem } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useThemeMode } from "../context/ThemeContext";

export default function SwitchesGroup() {
  const { t, i18n } = useTranslation();
  const { isDarkMode, toggleTheme } = useThemeMode();

  const [state, setState] = useState({
    streamingReplies: JSON.parse(
      localStorage.getItem("streamingReplies") ?? "false"
    ),
    soundEffects: JSON.parse(localStorage.getItem("soundEffects") ?? "true"),
  });

  const [language, setLanguage] = useState(i18n.language || "ar");

  const handleChangelang = (event) => {
    const selectedLang = event.target.value;
    setLanguage(selectedLang);
    i18n.changeLanguage(selectedLang);
  };

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setState({
      ...state,
      [name]: checked,
    });
    localStorage.setItem(name, JSON.stringify(checked));
  };

  // الربط المباشر بمسارات ملف الـ JSON
  const feature = [
    {
      id: "1",
      title: t("settings.appearance.dark_mode_title"),
      description: t("settings.appearance.dark_mode_desc"),
      stateKey: "darkMode",
    },
    {
      id: "2",
      title: t("settings.appearance.streaming_replies"),
      description: t("features.fast_replies_desc"),
      stateKey: "streamingReplies",
    },
    {
      id: "3",
      title: t("features.chat_history_title"),
      description: t("features.chat_history_desc"),
      stateKey: "soundEffects",
    },
  ];

  const newArray = feature.map((f) => {
    const isDarkModeSwitch = f.stateKey === "darkMode";
    return (
      <Box
        key={f.id}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "20px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <Box>
          <Typography sx={{ color: "text.primary" }}>{f.title}</Typography>
          <Typography sx={{ color: "custom.mutedText" }}>
            {f.description}
          </Typography>
        </Box>
        <Switch
          checked={isDarkModeSwitch ? isDarkMode : state[f.stateKey]}
          onChange={isDarkModeSwitch ? toggleTheme : handleChange}
          name={f.stateKey}
        />
      </Box>
    );
  });

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center",gap:2 }}>
        <PaletteOutlinedIcon
          sx={{ color: "secondary.main", marginRight: "10px" }}
        />
        <FormLabel component="legend" sx={{ color: "text.primary" }}>
          {t("settings.appearance.title")}
        </FormLabel>
      </Box>

      {newArray}

      {/* سطر اللغة */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "20px",
          width: "100%",
          gap: "15px",
        }}
      >
        <Box>
          <Typography sx={{ color: "text.primary" }}>
            {t("settings.sidebar.appearance")}
          </Typography>
          <Typography sx={{ color: "custom.mutedText" }}>
            {t("settings.subtitle")}
          </Typography>
        </Box>

        <Select
          value={language}
          onChange={handleChangelang}
          sx={{
            bgcolor: "custom.cardBg",
            color: "text.primary",
            height: "40px",
            width: { xs: "110px", sm: "150px" },
            borderRadius: "8px",
            "& .MuiSelect-icon": { color: "text.secondary" },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "custom.borderSoft",
            },
          }}
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="ar">العربية</MenuItem>
        </Select>
      </Box>
    </>
  );
}