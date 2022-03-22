import React, {useEffect, useState}  from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const {productId} = useParams();
    const [products,setProducts]= useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/products/${productId}`)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div>
            <h2>Details of: {products.title}</h2>
            <h2>This is Product Purchase: {productId}</h2>
        </div>
    );
};

export default Purchase; 