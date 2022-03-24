import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

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
        <div className='myOrder-section'>
            <h1 className='text-danger'>Manage Products</h1>
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>Product No</th>
                        <th>Products Name</th>
                        <th>Price</th>
                        <th>Image</th>
                    </tr>
                </thead>
                {products?.map((product, index) => (
                    <tbody>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{product?.title}</td>
                            <td>{product?.price}</td>
                            <td><img style={{ height: '50px', width: '50px' }} src={product?.img} alt='' /></td>
                            <button onClick={() => handleDelete(product?._id)} className="btn bg-danger p-2 m-1">Delete</button>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default ManageProducts;