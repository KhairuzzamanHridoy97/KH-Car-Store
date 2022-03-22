import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia, Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Explore = ({product}) => {
    const{title,img,description,price,_id}=product;
    return (
        <Grid item xs={4} sm={4} md={4}>        
        <Card sx={{ minWidth: 275 }}>
            <CardMedia
              component="img"
              style={{ width: 'auto', height: '150px',margin:'0 auto'}}
              image={img}
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ my:1 }} color="text.secondary">
           {description}
            </Typography>
          <Typography variant="body2" sx={{ my:1 }} className="text-danger" >
            Price : {price} USD
            </Typography>
           <Link to={`/purchase/${_id}`}>
             <Button variant="contained" className=""  sx={{ my:1 }} >Purchase</Button> 
           </Link>
            
        </CardContent>
          </Card>
         </Grid>
      
    );
};

export default Explore;