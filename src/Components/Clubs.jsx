import { Forward, Person, Person2, Person3, Person3Outlined, Person4 } from '@mui/icons-material'
import { Box, Container, Divider, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Stack, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }

const Clubs = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <Container sx={{height:"100vh"}}>
 <Typography variant='h2' my={2}>Clubs</Typography>
    
 <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
 <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
   <Tab label="English Club" {...a11yProps(0)} />
   <Tab label="Science Club" {...a11yProps(1)} />
   <Tab label="Hindi Club" {...a11yProps(2)} />
   <Tab label="Telugu Club" {...a11yProps(3)} />
   <Tab label="Social Club" {...a11yProps(4)} />
   <Tab label="Service Club" {...a11yProps(5)} />
   <Tab label="Maths Club" {...a11yProps(6)} />
   <Tab label="Cultural Club" {...a11yProps(7)} />
   <Tab label="Sports Club" {...a11yProps(8)} />
   
 </Tabs>
</Box>
<TabPanel value={value} index={0}>
<Container>


<Typography align='center' variant='h4' color={'Highlight'}>Aims</Typography>

<List>
{["Increase the use of good grammar and speak fluently in everyday situations.","Learn English pronunciation and real spoken English","Learn chunks of phrases, linking verbs and extensive vocabulary.","Be a member of an interactive community and encourage life-long learning of English.","Enhance quick learning through the fun way in a casual setting."].map(item=>(
  <ListItem>
<ListItemIcon><Forward color='info'/></ListItemIcon>
<ListItemText primary={item}/>
</ListItem>
))}
</List>


</Container>
</TabPanel>
<TabPanel value={value} index={1}>
<Container>
<Typography variant='h3' my={3}>Teachers Clubs</Typography>
<Typography>Each year, there are more than 300 active student clubs on campus open to all students — from the Cheese Club to the Superhero Club — in addition to school-based clubs, which are exclusive to NYU schools or academic programs.</Typography>

<Stack my={2} p={3}>
<Typography variant='h4'>Blue Club</Typography>

<List dense>
<ListItem>
<ListItemIcon ><Forward/></ListItemIcon>
<ListItemText primary="Rohan"/>
</ListItem>
<ListItem>
<ListItemIcon ><Forward/></ListItemIcon>
<ListItemText primary="Rohan"/>
</ListItem>
<ListItem>
<ListItemIcon ><Forward/></ListItemIcon>
<ListItemText primary="Rohan"/>
</ListItem>
<ListItem>
<ListItemIcon ><Forward/></ListItemIcon>
<ListItemText primary="Rohan"/>
</ListItem>
<ListItem>
<ListItemIcon ><Forward/></ListItemIcon>
<ListItemText primary="Rohan"/>
</ListItem>
<ListItem>
<ListItemIcon ><Forward/></ListItemIcon>
<ListItemText primary="Rohan"/>
</ListItem>
<ListItem>
<ListItemIcon ><Forward/></ListItemIcon>
<ListItemText primary="Rohan"/>
</ListItem>
</List>
</Stack>
</Container>
</TabPanel>

 
   
    </Container>
  )
}

export default Clubs