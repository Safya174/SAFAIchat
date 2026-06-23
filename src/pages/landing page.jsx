import  Navbar from "../components/Navbar"
import Hero from '../components/HeroContent';
import Card from '../components/feature'
import Box from '@mui/material/Box';
export default function LandingPage(){
  return(
    <Box sx={{overflowX:"hidden"}}>
     <Navbar></Navbar>
     <Hero></Hero>
     <Card></Card>
    </Box>
  
    
  )
}