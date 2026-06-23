import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import HistoryIcon from '@mui/icons-material/History';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import DarkModeIcon from '@mui/icons-material/DarkMode';

let feature = [
  { id: "1", title: "Fast replies", description: "Instant streaming responses word by word", icon: FlashOnIcon },
  { id: 2, title: "Chat history", description: "All your conversations saved locally", icon: HistoryIcon },
  { id: 3, title: "AI personas", description: "Choose your assistant's personality", icon: SmartToyIcon },
  { id: 4, title: "Dark mode", description: "Easy on the eyes, day or night", icon: DarkModeIcon },
];

export default function BasicCard() {
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
        <CardContent sx={{ textAlign: "center", backgroundColor: '#120D35', width: '100%' }}> 
          <Icon sx={{ color: "#B4A7FF", fontSize: "50px", borderRadius: "30%", height: "50px", width: '50px', backgroundColor: "#2D266D", padding: "10px" }} />
          <Typography gutterBottom sx={{ color: '#E8E6FF', fontSize: { xs: 24, md: 30 } }}>
            {f.title}
          </Typography>
          <Typography variant="body1" sx={{ color: "#7B6ED6" }}>
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