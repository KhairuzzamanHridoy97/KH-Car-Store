import React, { useEffect, useState } from 'react';
import Show from '../Show/Show';
import './ShowReviews.css'

const ShowReview = () => {
    const [showReviews,setShowReviews] = useState([]);

    useEffect(()=>{
        fetch('https://secure-beach-41579.herokuapp.com/addReview')
        .then(res=>res.json())
        .then(data=>setShowReviews(data))
    },[])
    return (
        <div>
            <h2 className='text-primary'>Our Customer Review</h2>
            <div  className='review-container  container'>
                {
                    showReviews.map(showReview => <Show
                        key={showReview._id}
                        showReview={showReview}
                    ></Show>)
                }
            </div>
        </div>
    );
};

export default ShowReview;