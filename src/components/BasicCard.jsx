import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { red, grey } from '@mui/material/colors';





export default function BasicCard(props) {
  const theme = 'dark'
  


  const agent = props.agent
  

  return (

    
      
      <Card style={{backgroundColor: "black"}} variant="" sx={{ width: 100, }}>
        
        <CardOverflow >
          <AspectRatio ratio="2">
            <img
              src={agent.displayIcon}
              srcSet={agent.displayIcon}
              loading="lazy"
              alt=""
            />
          </AspectRatio>
        </CardOverflow>
        <CardContent >
          <Typography style={{color: 'white'}} level="title-lg">{agent.displayName}</Typography>
          <Typography style={{color: 'gray'}} level="body-sm">{agent.role ? agent.role.displayName : ""}</Typography>
        </CardContent>
        <CardOverflow variant="soft" >

        </CardOverflow>
      </Card>
      

    
  );
}





