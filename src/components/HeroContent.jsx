import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'; // قمنا باستيراد Box بدلاً من div العادية

export default function Hero(){
  return(
    <Box sx={{
      display: 'flex',
      justifyContent: "center",
      alignItems: "center",
      flexDirection: 'column',
      height: "70vh",
      textAlign: 'center', // لتوسيط النصوص في الموبايل
      padding: '0 20px'   // حماية للعناصر حتى لا تلمس أطراف الشاشة في الموبايل
    }}>
        
      <Chip
        label="SafAI: Your Smart Assistant, Built on Gemini Pro"
        sx={{
          background: '#1a163a',
          border: '0.5px solid #534AB7',
          color: '#AFA9EC',
          fontSize: { xs: '10px', sm: '12px' }, // تظبيط حجم الـ Chip للموبايل
          borderRadius: '20px',
          whiteSpace: 'normal', // يسمح بنزول النص لسطر جديد لو الموبايل صغير جداً
          height: 'auto',
          padding: '4px 0'
        }}
      />

      <Typography 
        variant="h2" 
        component="h1" 
        sx={{
          color: "white",
          marginTop: "20px",
          fontWeight: 'bold',
          fontSize: { xs: '28px', sm: '40px', md: '50px' } // أحجام منطقية للموبايل والتاب والديسك توب
        }}
      > 
        Your AI assistant,
      </Typography> 

      <Typography 
        variant="h2" 
        component="h1" 
        sx={{
          color: "text.secondary",
          fontWeight: 'bold',
          fontSize: { xs: '28px', sm: '40px', md: '50px' } 
        }}
      > 
        smarter than ever
      </Typography>

      <Typography 
        variant="body1" // استخدام body1 أفضل للفقرات من h1
        component="p" 
        sx={{
          color: "text.secondary",
          marginTop: "20px",
          width: { xs: '90%', sm: '70%', md: '50%' }, // العرض يكون كبير في الموبايل ويصغر في الديسكتوب
          fontSize: { xs: '14px', sm: '16px', md: '20px' } // خطوط مريحة للعين
        }}
      > 
        Ask anything, get instant answers. Saf AI understands context, remembers your conversations, and helps you think better.
      </Typography>

    </Box>
  )       
}