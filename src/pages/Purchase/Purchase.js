import React, {useEffect, useState}  from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useFirebase from '../../hooks/useFirebase';
import './Purchase.css';

const Purchase = () => {
    const {productId} = useParams();
    const [product,setProduct]= useState({})

    const { user } = useFirebase();
;    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    // useEffect(()=>{
    //     fetch(`http://localhost:5000/products/${productId}`)
    //     .then(res=>res.json())
    //     .then(data=>setProduct(data))
    // },[])

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                const orderProduct = data.find(singleOrder => singleOrder._id == productId)
                setProduct(orderProduct);
                
            })
    }, [productId]);

    const onSubmit = data => {
        data.email = user?.email;
        // data.status = 'Pending';
        fetch('https://localhost:5000/orders', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (data) {
                    alert('Ordered successfully');
                    reset();
                }
            });
        console.log(data);
    }
    return (
        <div>
             <div className="review-section">
                <div className="row">
                    <div class="card col-lg-6 col-sm-12  item-part">
                        <img src={product.img} class="details-image" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title text-info">{product.title}</h5>
                            <p class="card-text">{product.description}</p>
                            <h3 class="card-text text-info">${product.price}</h3>
                        </div>
                    </div>

                    {/* Form Start here */}
                    <div className="col-lg-6 col-sm-12 mb-5">
                        <h1 className="mt-5 text-center text-info">Please Provide your Information for Purchase</h1>
                        <div className="login-box w-75 m-auto">
                            <div className="package-box border border d-flex justify-content-center align-items-center p-5">
                                <div className="login-form">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <input defaultValue={product?.title}
                                            {...register("Name", { required: true })}
                                            placeholder="Products Name"
                                            className="p-2 m-2 w-100"
                                        />
                                        <br />
                                        <input defaultValue={user?.displayName}
                                            {...register("title", { required: true })}
                                            placeholder="Name"
                                            className="p-2 m-2 w-100"
                                        />
                                        <br />
                                        <input defaultValue={user?.email}
                                            {...register("email", { required: true })}
                                            placeholder="Email"
                                            className="p-2 m-2 w-100"
                                        />
                                        <br />
                                        <input defaultValue={product?.price}
                                            {...register("price", { required: true })}
                                            placeholder="Price"
                                            className="p-2 m-2 w-100"
                                        />
                                        <br />
                                        <input
                                            {...register("date")}
                                            placeholder="Date"
                                            type="date"
                                            className="p-2 m-2 w-100"
                                        />
                                        <br />
                                        <input
                                            {...register("address", { required: true })}
                                            placeholder="Address"
                                            className="p-2 m-2 w-100"
                                        />
                                        <br />
                                        <input
                                            {...register("phone", { required: true })}
                                            placeholder="Phone Number"
                                            className="p-2 m-2 w-100"
                                        />
                                        <br />

                                        {errors.exampleRequired && <span>This field is required</span>}

                                        <input type="submit" value="Purchase" className="btn btn-outline-success w-75" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase; 