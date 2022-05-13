import React from 'react';

const Review = ({review}) => {
    return (
        <div className="card max:lg-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
         
          <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
          <div className="flex justify-center items-center">
          <div className="avatar">
        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src={review.img}  alt=""/>
    </div>
    </div>
        <div className='ml-5'>
            <h4 className='text-xl'>{review.name}</h4>
            <p>{review.location}</p>
        </div>

          </div>
        </div>
      </div>
    );
};

export default Review;