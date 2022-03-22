import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [products,setProducts] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);

    const handleDelete = id=>{
        const url =`http://localhost:5000/products/${id}`
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount){
                alert("Deleted")
                const remaining= products.filter(product=>product._id!== id);
                setProducts(remaining)
            }
        })
    }
    return (
        <div>
            <h2>Manage Products</h2>
            {
                products.map(product=> <div key={product._id}>
                    <h5>{product.title}</h5>
                    <button onClick={()=>handleDelete(product._id)} className='btn btn-danger'>Delete</button>
                </div> )
            }
        </div>
    );
};

export default ManageProducts;