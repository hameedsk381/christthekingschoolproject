import { Forward } from '@mui/icons-material'
import { Box, Breadcrumbs, Container, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Admissions = () => {
  return (
    <Container>
    <Box component="div" role="presentation" sx={{ my: 2 }}>
        <Typography variant="h6">Admissions</Typography>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" to="/">
            Home
          </Link>

          <Typography sx={{ color: "#757ce8" }}>Admissions</Typography>
        </Breadcrumbs>
      </Box>
      
    <Container component={Paper} sx={{p:3,bgcolor:"ivory",my:3}}>
      
    <List sx={{ placeItems: "center", p: 4 }}>
    <ListItem>
      <ListItemIcon>
        <Forward color='info'/>
      </ListItemIcon>
      <ListItemText 
        primary="Admission into the school is open to all. Admissions are made on the strength of 'n oral Interview for L.K.G and Written Test for U.K.G to VIII Classes.
        
"
      />
    </ListItem>

    <ListItem>
      <ListItemIcon>
        <Forward color='info'/>
      </ListItemIcon>
      <ListItemText
        primary="  Children below 4 years and above 5 years are not admitted to the nursery.

"
      />
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <Forward color='info'/>
      </ListItemIcon>
      <ListItemText
        primary="  The minimum age for admission into L.K.G is 4, years and

        into U.K.G is 5 and......so on. 
        

"
      />
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <Forward color='info'/>
      </ListItemIcon>
      <ListItemText
        primary=" Admissions for L.K.G., U.K.G. and I std are made on the production of Original Birth Certificate & Adhar Card.

"
      />
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <Forward color='info'/>
      </ListItemIcon>
      <ListItemText
        primary=" Admissions for classes II to VI are made on the production of Record Sheet of a recognised school or Original Date of Birth Certificate.


"
      />
    </ListItem>
    <ListItem>
    <ListItemIcon>
      <Forward color='info'/>
    </ListItemIcon>
    <ListItemText
      primary=" Admissions for classes VII to VIII are made on the basis or Transfer Certificates Issued by any recognized school.




"
    />
  </ListItem>
  <ListItem>
  <ListItemIcon>
    <Forward color='info'/>
  </ListItemIcon>
  <ListItemText
    primary=" Pupil having attended other recognised school will not be admitted without a Transfer Certificate. It should be duly countersigned by the proper Educations Authorities in case of pupil coming from outside Andhra Pradesh.



"
  />
</ListItem>
<ListItem>
<ListItemIcon>
  <Forward color='info'/>
</ListItemIcon>
<ListItemText
  primary=" Once a student is admitted in the School his/her date of birth will not be changed.



"
/>
</ListItem>
<ListItem>
<ListItemIcon>
  <Forward color='info'/>
</ListItemIcon>
<ListItemText
  primary=" Admissions start in November/Derember for every Aca- demic year. The cost of application form is Rs. 200/- Duly Filled in form should be returned within 3 days with 2 recent photographs of a child and above asked certificates.



"
/>
</ListItem>
<ListItem>
<ListItemIcon>
  <Forward color='info'/>
</ListItemIcon>
<ListItemText
  primary=" The students who seek admission must be accompanied by the parents on the interview day.




"
/>
</ListItem>
<ListItem>
<ListItemIcon>
  <Forward color='info'/>
</ListItemIcon>
<ListItemText
  primary="Admission into any class is subject to the seat availability and is done solely on the basis of merit.



"
/>
</ListItem>


  </List>
     

      
    </Container>
    </Container>
  )
}

export default Admissions