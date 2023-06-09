import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Avatar, Breadcrumbs, Button, Container, Grid, Paper } from '@mui/material';
import { FormatQuote } from '@mui/icons-material';
import { Link, useParams } from 'react-router-dom';
import principal from '../assets/principal.JPG'
export default function Messagecard() {
 const {id} = useParams()


  return (
    <Container sx={{my:4}}>
   {id === "principal" ? (
    
    
    <Box>
    
    <Box component="div" role="presentation" sx={{my:2}}>
<Typography variant="h5" my={1} color={'Highlight'}>{id}'s Message</Typography>
<Breadcrumbs aria-label="breadcrumb" >
  <Link underline="hover" color="inherit" to='/'>
  Home
  </Link>
 
  <Typography sx={{ color: "#757ce8" }}>Message</Typography>
</Breadcrumbs>
</Box>
<Paper sx={{py:4,height:"100%",bgcolor:"ivory"}} elevation={3} >
    
    
   <Grid container   >
  <Grid item xs={12} md={3} >
<Paper elevation={5} sx={{width:{xs:"90%",lg:"60%"},height:"100%",mb:3,margin:"auto",p:1}} >

<Avatar variant="circular" src={principal} alt="principal" sx={{width:"100%",height:"100%"}}/>
</Paper>
  </Grid>
  <Grid item xs={12} md={9} sx={{p:2}}>
  
  <Typography variant="h5" color="Highlight" sx={{display:"inline-flex",fontSize:{xs:20,md:25,lg:26}}}>{id}'s Message</Typography>
  
 <Typography component="p" py={2} sx={{ml:2,fontFamily:"serif",fontSize:{xs:12,md:15,lg:18}}}>

 "Christ the King E.M. High School, Christurajapuram, Vijayawada, is celebrating its Silver Jubilee. It is befitting to thank and praise the almighty God for his loving protection and providence all through the past twenty five years"
 </Typography>

 


  </Grid>

   
   </Grid>
   </Paper>
    </Box>
    ): ( 
    
    <Box>
    <Box component="div" role="presentation" sx={{my:2}}>
    <Typography variant="h5" my={1} color={'Highlight'}>{id}'s Message</Typography>
    <Breadcrumbs aria-label="breadcrumb" >
      <Link underline="hover" color="inherit" to='/'>
      Home
      </Link>
     
      <Typography sx={{ color: "#757ce8" }}>Message</Typography>
    </Breadcrumbs>
    </Box>
    <Paper sx={{py:4,height:"100%",bgcolor:"ivory"}} elevation={3} >
    
    
    <Grid container   >
   <Grid item xs={12} md={3} >
 <Paper elevation={5} sx={{width:{xs:"90%",lg:"60%"},height:"100%",mb:3,margin:"auto",p:1}} >
 
 <Avatar variant="square" src={principal} alt="principal" sx={{width:"100%",height:"100%"}}/>
 </Paper>
   </Grid>
   <Grid item xs={12} md={9} sx={{p:2}}>
   
   <Typography variant="h5" color="Highlight" sx={{display:"inline-flex",fontSize:{xs:20,md:25,lg:26}}}>{id}'s Message</Typography>
   
  <Typography component="p" py={2} sx={{ml:2,fontFamily:"serif",fontSize:{xs:12,md:15,lg:18}}}>
 
  "Christ the King E.M. High School, Christurajapuram, Vijayawada, is celebrating its Silver Jubilee. It is befitting to thank and praise the almighty God for his loving protection and providence all through the past twenty five years"
  </Typography>
 
  
 
 
   </Grid>
 
    
    </Grid>
    </Paper>
    </Box>
   )}
   
    </Container>
  );
}