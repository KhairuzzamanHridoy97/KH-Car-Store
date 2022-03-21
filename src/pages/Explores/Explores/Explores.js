import React, { useEffect, useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';

const Explores = () => {
    const [cars,setCars]= useState([])
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res=>res.json())
        .then(data=>setCars(data))
    },[])
    return (
        <div>
            <h1>Purchase Your Favourite Car</h1>
            <h3>This Is Explore: {cars.length}</h3>
            {
                
            }
        </div>
    );
};

export default Explores;