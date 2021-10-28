import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import '../styles/home.css';

 



export default function Projectcard() {

  return (

    <Card>
     
      <CardContent>
        <div className="pTitle"><Typography>Project Title<span>Project Ref</span></Typography></div>
        <div> <Typography>Project Manager</Typography></div>

        <div> <Typography>Client</Typography></div>

        <div> <Typography>Start date </Typography> </div>
        <div> <Typography>End date </Typography> </div>
        
        <div><Typography>Project Description</Typography> </div>
        

        <div> 
          <Button size="small" variant="contained">MEL</Button>
         
        </div>
        
    

      </CardContent>

    <CheckCircleOutlineIcon sx={{
        display: 'flex',
        justify: 'flex-end',
        alignItems:"flex-end"
                          
   
        }} fontSize="large"/>
        
    </Card> 
     



  );
 
}

