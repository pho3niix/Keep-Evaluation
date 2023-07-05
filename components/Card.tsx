import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Note({ children }) {
  return (
    <Card id="card" style={{ backgroundColor: '#cdf6d7' }} color='primary' sx={{ width: 270 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Title
        </Typography>
        <Typography style={{ color: '#404040' }} id="description" variant="overline">
          well meaning and kindly.
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='contained' style={{ backgroundColor: 'white' }} id="check" size="small">Hola mundo</Button>
      </CardActions>
    </Card>
  );
}