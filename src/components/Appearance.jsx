import * as React from "react";
import FormLabel from "@mui/material/FormLabel";
import Switch from "@mui/material/Switch";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Select, MenuItem } from "@mui/material";
import { useState } from "react";
export default function SwitchesGroup() {
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: true,
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
  let feature = [
    {
      id: "1",
      title: "Dark mode",
      description: "Use dark theme across the app",
    },
    {
      id: 2,
      title: "Streaming replies",
      description: "Show words one by one",
    },
    {
      id: 3,
      title: "Sound effects",
      description: "Play sound on new message",
    },
  ];
  let newArray = feature.map((f) => {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
      <Box>
        <Typography sx={{ color: "text.primary"}}>{f.title}</Typography>
        <Typography sx={{ color: "custom.mutedText"}}>
           {f.description}
        </Typography>
      </Box>
      <Switch checked={state.gilad} onChange={handleChange} name="gilad" />
      </Box>
    );
  });
  return (
    <>
   
      <Box sx={{ display: "flex" }}>
        <PaletteOutlinedIcon
          sx={{ color: "secondary.main", marginRight: "10px" }}
        />
        <FormLabel component="legend" sx={{ color: "text.primary" }}>
          Appearance
        </FormLabel>
      </Box>

     {newArray}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <Box>
          <Typography sx={{ color: "text.primary" }}>Language</Typography>
          <Typography sx={{ color: "custom.mutedText"}}>Interface language</Typography>
        </Box>
        <Select
          value={language}
          onChange={handleChangelang}
          sx={{
            bgcolor: "white",
            color: "black",
            height: "40px",
            width: "100%",
          }}
        >
          <MenuItem value="English">English</MenuItem>
          <MenuItem value="Arabic">Arabic</MenuItem>
        </Select>
      </Box>
    </>
  );
}
