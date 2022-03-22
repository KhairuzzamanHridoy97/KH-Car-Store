import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/products',data)
        .then(res=>{
           if(res.data.insertId){
               alert('Product Add Successfully')
           }
        })
    };

    return (
        <div className='addProduct-Container'>
            <h1 className="mt-5 text-center text-danger">Add Products</h1>
            <div className="login-box w-25 m-auto mt-5">
                <div className="product-box border border d-flex justify-content-center align-items-center">
                    <div className="login-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("name", { required: true })}
                                placeholder="Product Name"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("description", { required: true })}
                                placeholder="Description"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("price", { required: true })}
                                placeholder="Price"
                                className="p-2 m-2 w-100"
                            />
                            <br />

                            <input
                                {...register("img", { required: true })}
                                placeholder="Image Link"
                                className="p-2 m-2 w-100"
                            />
                            <br />

                            {errors.exampleRequired && <span>This field is required</span>}

                            <input type="submit" value="Add Product" className="btn btn-primary w-50" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;