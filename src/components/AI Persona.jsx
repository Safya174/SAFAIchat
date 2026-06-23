
import { Grid,  Typography } from '@mui/material'
import PsychologyIcon from '@mui/icons-material/Psychology';
import CodeIcon from '@mui/icons-material/Code';
import SettingsInputAntennaIcon from '@mui/icons-material/SettingsInputAntenna'
import CreateIcon from '@mui/icons-material/Create';
import Card from '@mui/material/Card';

export default function AIpersona(){
  let feature = [
  {
    id:"1",
    title: "General",
    description: "All-purpose assistant",
    icon: PsychologyIcon,
  },
  {
    id: 2,
    title: "Developer",
    description: "Code & tech focused",
    icon: CodeIcon,
  },
  {
    id: 3,
    title: "Engineer",
    description: "Electronics & signals",
    icon:SettingsInputAntennaIcon ,
  },
  {
    id: 4,
    title: "Writer",
    description: "Creative writing help",
    icon: CreateIcon,
  },
]
let newArray = feature.map((f)=>{
    let Icon = f.icon
    
    return(
       <Grid item xs={6} >
     <Card sx={{ minWidth:{sm:"100%",md:"275px"},borderRadius:"16px",textAlign:"center",padding:"15px",  border: "0.5px solid", borderColor: "divider", }}>
     
    
      <Icon sx={{color:"#B4A7FF",fontSize:"50px",height:"50px",width:'50px',padding:"10px"}}></Icon>
      <Typography sx={{fontWeight:"bold"}}>{f.title}</Typography>
      <Typography sx={{color: "custom.mutedText"}}>{f.description}</Typography>
     
   </Card>
  </Grid>
    )
})
  return(
  <Grid container sx={{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}}   spacing={1.5}>
 
 {newArray}
 
 
</Grid>
   

  )       

}