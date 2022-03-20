import React,{useState} from 'react';
import Divider from '@mui/material/Divider';
import { Box, Container, Grid, Typography } from '@mui/material';
import offer1 from '../../../images/latestOffer/offer1.jpg'
import offer2 from '../../../images/latestOffer/offer2.jpg'
import offer3 from '../../../images/latestOffer/offer3.jpg'
import offer4 from '../../../images/latestOffer/offer4.jpg'
import { Card, Col, Row } from 'react-bootstrap';
import LatestOffer from '../LatestOffer/LatestOffer';


const offers =[
    {
        "name":"Toyta",
        "img":offer1
    },
    {
        "name":"Ferrai",
        "img":offer2
    },
    {
        "name":"Corolla",
        "img":offer3
    },
]

const LatestOffers = () => {

    return (
 
            <Container>
                <Divider />
                <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography variant='h6' sx={{fontWeight:500,m:2,color:'success.main'}} component="div">
                    Our Latest Offers
                </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
         {
             offers.map(offer=><LatestOffer
             offer={offer}
             key={offer.name}
             >

             </LatestOffer>)
         }
        </Grid>
        </Container>
      </Box>
            </Container>
    );
};

export default LatestOffers;