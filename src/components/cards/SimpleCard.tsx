import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

type Props={
  tilte:string
  content?:string
  width?:number|string
  img:string
}
export default function  SimpleCard({tilte,content,width,img}:Props) {
  return (
    <Card sx={{ maxWidth: width }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent  >
          <Typography textAlign='center' gutterBottom variant="h5" component="div">
            {tilte}
          </Typography>
          <Typography textAlign='center' variant="body2" color="text.secondary">
            {content&&content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
