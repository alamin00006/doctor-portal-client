import React from 'react';
import Banner from './Banner';
import ContactUs from './ContactUs';
import Exceptional from './Exceptional';
import Footer from '../Shared/Footer';
import Info from './Info';
import Services from './Services';
import Testimonial from './Testimonial';
import MakeAppointment from './MakeAppointment';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Exceptional></Exceptional>
           <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;