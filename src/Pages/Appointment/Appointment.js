import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailabeAppointment from './AvailabeAppointment';

const Appointment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <AppointmentBanner date ={date} setDate ={setDate}></AppointmentBanner>
            <AvailabeAppointment date={date}></AvailabeAppointment>
           <Footer></Footer> 
        </div>
    );
};

export default Appointment;