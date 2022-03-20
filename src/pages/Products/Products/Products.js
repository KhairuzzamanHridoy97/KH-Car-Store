import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Product from '../Product/Product';

// https://i.ibb.co/Km5MKQR/bugati1.png
// https://i.ibb.co/Km5MKQR/bugati1.png
// https://i.ibb.co/DKGvM4w/bugati3.png
// https://i.ibb.co/MB1K3pZ/ferrari-PNG1.png


const Products = () => {
    const [products,setProducts]= useState([])

    useEffect(()=>{
        fetch('./products.JSON')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <Box sx={{ flexGrow: 1 }}>
      <Container className="mb-3" >
        <Typography variant="h6" sx={{ fontWeight: 'bold',my:3 }} className="text-danger" component="div">
          OUR PRODUCTS
        </Typography>
         <Typography variant="h6" sx={{ fontWeight: 'bold',mb:3  }} className="text-success" component="div">
          KH-STORE IS THE BEST CAR SHOP IN THIS TOWN
        </Typography>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
                products.slice(0, 6).map(product=> <Product
                    key={product.id}
                    product={product}
                ></Product>)
            }
        </Grid>
       </Container>
    </Box>
    );
};

export default Products;