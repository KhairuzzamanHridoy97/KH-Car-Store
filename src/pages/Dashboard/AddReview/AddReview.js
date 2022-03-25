import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';

const AddReview = () => {
    const { register, handleSubmit, watch,reset, formState: { errors } } = useForm();
    const {user} = useAuth()
    

    const onSubmit = data => {
        data.email = user?.email;
        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (data) {
                    alert('Review Added successfully');
                    reset();
                }
            });
        console.log(data);
    }

    return (
        <div>
            <h2 className='text-primary text-center'>Please! Review Our Service</h2>
            <div className="col-lg-12 col-sm-12">
                        <div className="login-box w-50 m-auto mt-5">
                            <div className="package-box border border d-flex justify-content-center align-items-center">
                                <div className="login-form">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <input defaultValue={user?.displayName}
                                            {...register("name", { required: true })}
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
                                        <input
                                            {...register("review", { required: true })}
                                            placeholder="Write Review"
                                            className="p-2 m-2 w-100"
                                        />
                                        <br />
                                        <input
                                            {...register("rating", { required: true })}
                                            placeholder="Rating"
                                            className="p-2 m-2 w-100"
                                        />
                                        <br />

                                        {errors.exampleRequired && <span>This field is required</span>}

                                        <input type="submit" value="Submit Review" className="btn btn-primary w-60" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default AddReview;