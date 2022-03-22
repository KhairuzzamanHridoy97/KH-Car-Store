import React from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const {productId} = useParams();
    return (
        <div>
            <h2>This is Product Purchase: {productId}</h2>
        </div>
    );
};

export default Purchase; 