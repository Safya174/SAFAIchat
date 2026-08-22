import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'; // قمنا باستيراد Box بدلاً من div العادية
import { useTranslation } from "react-i18next";
export default function Hero(){
  const { t } = useTranslation();
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
          bgcolor: 'custom.cardBg',
          border: '0.5px solid',
          borderColor: 'primary.main',
          color: 'custom.mutedText',
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
          color: "text.primary",
          marginTop: "20px",
          fontWeight: 'bold',
          fontSize: { xs: '28px', sm: '40px', md: '50px' } // أحجام منطقية للموبايل والتاب والديسك توب
        }}
      > 
       {t("badge")} 
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
        {t("hero_title")} 
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
        {t("hero_description")} 
      </Typography>

    </Box>
  )       
}