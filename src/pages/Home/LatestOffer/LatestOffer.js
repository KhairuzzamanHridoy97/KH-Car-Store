import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia, Grid } from '@mui/material';
import './LatestOffer.css';

const LatestOffer = ({offer}) => {
    const {name,img}= offer;
    return (
        <Grid   item xs={4} sm={4} md={4}>
        
        <Card className="latestOffer-Card"  sx={{ minWidth: 275 }}>
            <CardMedia
              component="img"
              
              style={{ width: 'auto', height: '150px',margin:'0 auto'}}
              image={img}
        />
        <CardContent>
          <Typography variant="h4" component="div">
            {name}
          </Typography>        
             <button  className="btn btn-outline-dark m-2" >Details</button>             
        </CardContent>
          </Card>
         </Grid>
    );
};

export default LatestOffer;