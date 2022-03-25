import React from 'react';
import { useForm } from "react-hook-form";

const AddReview = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <h2 className='text-primary'>Please! Review Our Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("firstName", { required: true, maxLength: 20 })} /> <br /> <br />
                <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} /> <br /> <br />
                <input type="number" {...register("age", { min: 18, max: 99 })} /> <br /> <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddReview;