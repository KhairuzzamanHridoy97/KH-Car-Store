import React, {useEffect, useState}  from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import { useForm } from 'react-hook-form';
import useFirebase from '../../hooks/useFirebase';
import './Purchase.css';
import { CardContent, CardMedia, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

import './Purchase.css';

const Purchase = () => {
    const {productId} = useParams();
    const [product,setProduct]= useState({})

    const {user}= useAuth();
    
    const { register, handleSubmit, watch,reset, formState: { errors }  } = useForm();
    
    useEffect(()=>{
        fetch(`https://secure-beach-41579.herokuapp.com/products/${productId}`)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[]);
    
    const onSubmit = data =>{
        fetch('https://secure-beach-41579.herokuapp.com/orders',{
            method:'POST',
            headers: { 
                'content-type': 'application/json' 
            },
            body: JSON.stringify(data),
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            reset()
        })
    console.log(data);
    alert("Order Submit")
    }
    
    return (
        < Container>
            <Grid container spacing={2}>
            <Grid item xs={12} md={6} sx={{mt:4}}>
                h2
                <Card sx={{ minWidth: "100%" }}>
                <CardMedia
                component="img"
                style={{ width: 'auto', height: '150px',margin:'0 auto'}}
                image={product.img}
            />
            <CardContent>
            <Typography variant="h5" component="div">
                {product.title}
            </Typography>
            <Typography variant="body2" sx={{ my:1 }} color="text.secondary">
            {product.description}
                </Typography>
            <Typography variant="body2" sx={{ my:1 }} className="text-danger" >
                Price :{product.price} USD
                </Typography>
            
            </CardContent>
                </Card>                        
            </Grid>
            <Grid item xs={12} md={6}>
                <h3 className="text-primary m-3">Puchase Form</h3>
                <form className='purchase-form' onSubmit={handleSubmit(onSubmit)}>
                    <input  defaultValue={product.title} {...register("title", { required: true })} /> <br /> <br />
                    <input defaultValue={user.email} {...register("email", { required: true })} /> <br /> <br />
                    <input defaultValue={user.displayName} placeholder='User Name' {...register("name", { required: true })} /> <br /> <br />
                    <input defaultValue={user.displayName}  type='date'  {...register("date", { required: true }) } /> <br /> <br />
                     <input defaultValue={product.price} type="number" {...register("price",{ required: true })} /> <br /> <br />

                    <input  placeholder='Location' type='text'  {...register("location", { required: true }) } /> <br /> <br />
                    <input className='btn btn-danger' type="submit" />
                </form>
                <Link to='/home' > <button className="btn mt-3 btn-outline-dark">Back To Home </button> </Link>
            </Grid>
            </Grid>
        </Container>
    );
};

export default Purchase; 























// <div className="review-section">
// <div className="row">
//     <div class="card col-lg-6 col-sm-12  item-part">
//         <img src={product.img} class="details-image" alt="..." />
//         <div class="card-body">
//             <h5 class="card-title text-info">{product.title}</h5>
//             <p class="card-text">{product.description}</p>
//             <h3 class="card-text text-info">${product.price}</h3>
//         </div>
//     </div>

//     {/* Form Start here */}
//     <div className="col-lg-6 col-sm-12 mb-5">
//         <h1 className="mt-5 text-center text-info">Please Provide your Information for Purchase</h1>
//         <div className="login-box w-75 m-auto">
//             <div className="package-box border border d-flex justify-content-center align-items-center p-5">
//                 <div className="login-form">
//                     <form onSubmit={handleSubmit(onSubmit)}>
//                         <input defaultValue={product?.title}
//                             {...register("Name", { required: true })}
//                             placeholder="Products Name"
//                             className="p-2 m-2 w-100"
//                         />
//                         <br />
//                         <input defaultValue={user?.displayName}
//                             {...register("title", { required: true })}
//                             placeholder="Name"
//                             className="p-2 m-2 w-100"
//                         />
//                         <br />
//                         <input defaultValue={user?.email}
//                             {...register("email", { required: true })}
//                             placeholder="Email"
//                             className="p-2 m-2 w-100"
//                         />
//                         <br />
//                         <input defaultValue={product?.price}
//                             {...register("price", { required: true })}
//                             placeholder="Price"
//                             className="p-2 m-2 w-100"
//                         />
//                         <br />
//                         <input
//                             {...register("date")}
//                             placeholder="Date"
//                             type="date"
//                             className="p-2 m-2 w-100"
//                         />
//                         <br />
//                         <input
//                             {...register("address", { required: true })}
//                             placeholder="Address"
//                             className="p-2 m-2 w-100"
//                         />
//                         <br />
//                         <input
//                             {...register("phone", { required: true })}
//                             placeholder="Phone Number"
//                             className="p-2 m-2 w-100"
//                         />
//                         <br />

//                         {errors.exampleRequired && <span>This field is required</span>}

//                         <input type="submit" value="Purchase" className="btn btn-outline-success w-75" />
//                     </form>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
// </div>