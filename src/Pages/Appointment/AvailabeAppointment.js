import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';

const AvailabeAppointment = ({date}) => {
    const [services, setServices] = useState([])

    useEffect( () =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data =>setServices(data))
    },[])
    return (
        <div>
            <p className='text-secondary text-center'>Available Appointment {format (date, 'PP')}</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5'>
                {services.map(service =><Service key={service._id} service ={service}></Service>)}
            </div>
        </div>
    );
};

export default AvailabeAppointment;