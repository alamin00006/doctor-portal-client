import React from 'react';
import Fluoride from '../../assets/images/fluoride.png'
import Cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Servcie from './Servcie';

const Services = () => {
const services = [
    {
        _id:1,
        title:'Fluoride Treatment',
        description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        img: Fluoride
    },
    {
        _id:2,
        title:'Cavity Filling',
        description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        img: Cavity
    },
    {
        _id:3,
        title:'Teeth Whitening',
        description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        img: whitening 
    },
]

    return (
        <div className='my-28'>
           <div className='text-center text-xl font-bold'>
           <h3 className='text-primary uppercase'>This is our services</h3>
            <h2>Services We Provide</h2>
           </div>
           <div className='grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'>
           {
               services.map(service => <Servcie key={service._id}
               service={service}
               ></Servcie>)
           }
           </div>
        </div>
    );
};

export default Services;