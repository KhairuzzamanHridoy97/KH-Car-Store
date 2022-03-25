import { Rating } from '@mui/material';
import React from 'react';
import './Show.css';

const Show = ({ showReview }) => {
    const { name, email, review, rating } = showReview;
    return (
        <div>

            <div class="col-4 mb-5">
                <div class="card-review">
                    <div class="card-body">
                        <h4 class="card-title">{name}</h4>
                        <p class="card-text">{email}</p>
                        <p class="card-text">{review}</p>
                        <Rating name="read-only" value={rating} readOnly />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Show;