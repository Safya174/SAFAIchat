import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

export default function Hero(){
  return(
    <div style={{display:'flex',justifyContent:"center",alignItems:"center",flexDirection:'column',height:"70vh"}}>
        <Chip
        label="SafAI: Your Smart Assistant, Built on Gemini Pro"
         sx={{
    background: '#1a163a',
    border: '0.5px solid #534AB7',
    color: '#AFA9EC',
    fontSize: '11px',
    borderRadius: '20px',
  }}
      />
  <Typography variant="h2" component="h1" sx={{color:"white",marginTop:"20px"}}> 
    Your AI assistant,
  </Typography> 
   <Typography variant="h2" component="h1" sx={{color:"text.secondary"}}> 
    smarter than ever
  </Typography>
   <Typography variant="p" component="h1" sx={{color:"text.secondary",marginTop:"20px",width:"50%"}}> 
     Ask anything, get instant answers. Saf AI understands context, remembers your conversations, and helps you think better.
  </Typography>



    </div>
    
  )      
}
