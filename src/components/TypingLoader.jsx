import Box from '@mui/material/Box';
 export default function TypingLoader(){
    let doteStyle = {
        width: '10px',
        height: '10px',
        MarginLeft:'10px',
        backgroundColor: '#635bff', 
        borderRadius: '50%',
        animation: 'bounce 1.4s infinite ease-in-out both',
        "@keyframes bounce" : {
            "0%,80%,100%":{
                transform: 'scale(0.6)',
                opacity: 0.4,
            },
           "40%":{
                transform: 'scale(1)',
                opacity: 1,
           },
        },
    };
    return(
       <Box sx={{display:"flex"}}>
          <Box sx={{...doteStyle,animationDelay:"0s"}}></Box>
          <Box sx={{...doteStyle,animationDelay:"0.2s"}}></Box>
          <Box sx={{...doteStyle,animationDelay:"0.4s"}}></Box>
       </Box>  
    )
 }