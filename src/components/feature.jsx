import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import HistoryIcon from '@mui/icons-material/History';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import DarkModeIcon from '@mui/icons-material/DarkMode';
let feature = [
  {
    id:"1",
    title: "Fast replies",
    description: "Instant streaming responses word by word",
    icon: FlashOnIcon,
  },
  {
    id: 2,
    title: "Chat history",
    description: "All your conversations saved locally",
    icon: HistoryIcon,
  },
  {
    id: 3,
    title: "AI personas",
    description: "Choose your assistant's personality",
    icon: SmartToyIcon,
  },
  {
    id: 4,
    title: "Dark mode",
    description: "Easy on the eyes, day or night",
    icon: DarkModeIcon,
  },
]
export default function BasicCard(){
  let featuremap = feature.map((f)=>{
    let Icon = f.icon
  return(
    <Card sx={{ minWidth: 275,borderRadius:"16px" }}>
      <CardContent sx={{textAlign:"center",backgroundColor:'#120D35'}}> 
        <Icon sx={{color:"#B4A7FF",fontSize:"50px",borderRadius:"30%",height:"50px",width:'50px',backgroundColor:"#2D266D",padding:"10px"}}  ></Icon>
        <Typography gutterBottom sx={{ color: '#E8E6FF', fontSize: 30 }}>
            {f.title}
        </Typography>
        <Typography variant="h5" sx={{color:"#7B6ED6"}} component="div">
          {f.description}
        </Typography>
      </CardContent>
    </Card>
  )   
  })
 
  return (
     <Box
    component="span"
    sx={{ display: 'flex',gap:"15px",justifyContent:"center", mx: '2px', transform: 'scale(0.8)' }}
  >
    {featuremap}
  </Box>
  );
}

