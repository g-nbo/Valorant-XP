import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';

export default function BasicCard(props) {

  const agent = props.agent
  return (
    <Card className="BasicCard" variant="outlined" sx={{ width: 320 }}>
      <CardOverflow>
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
      <Typography level="title-lg">{agent.displayName}</Typography>
      <Typography level="body-sm">{agent.role ? agent.role.displayName : ""}</Typography>
      </CardContent>
      <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
       
      </CardOverflow>
    </Card>
  );
}





