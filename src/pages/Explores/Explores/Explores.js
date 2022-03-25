import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Explore from '../Explore/Explore';

const Explores = () => {
    const [products,setProducts]= useState([])
    useEffect(()=>{
        fetch('https://secure-beach-41579.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
        
    },[])
    return (
        <div>
            <Navigation></Navigation>
            <h1 className='text-danger'>Purchase Your Favourite Car</h1>
            <h2 className="text-primary">Choose Here</h2>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                
                    {
                        products.map(product=> 
                        <Explore
                            key={product._id}
                            product={product}
                        ></Explore>)
                    }
            </Grid>
            <Footer></Footer>
        </div>
    );
};

export default Explores;