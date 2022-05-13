import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';

const Testimonial = () => {
const reviews = [
    {
        _id:1,
        name:"Winson Herry",
        reviw:'',
        img: people1,
        location:'California'
    },
    {
        _id:2,
        name:"Winson Herry",
        reviw:'',
        img: people2,
        location:'California'
    },
    {
        _id:3,
        name:"Winson Herry",
        reviw:'',
        img: people3,
        location:'California'
    },
]

    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
            <h4 className='text-primary text-xl font-bold'>Testimonial</h4>
            <h2 className='text-3xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>

            {/* review Part */}
            <div className='grid grid-cols-1 lg:grid-cols-3 md: grid-cols-2'>
                {
                    reviews.map(review =><Review key={review._id} review ={review}></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;