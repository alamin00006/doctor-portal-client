import React from 'react';
import contactBg from '../../assets/images/appointment.png'

const ContactUs = () => {
    return (
        <div style={{
            background:`url(${contactBg})`
        }}>
            <div className='text-center'>
            <h2 className='text-primary text-xl'>Contact Us</h2>
            <h1 className='text-3xl text-white mb-6'>Stay connected with us</h1>
           <form>
           <input className='mb-2 lg:w-96 px-2 rounded h-12' type="email" name="email" placeholder='Email Address' id="" /><br />
            <input className='mb-2 lg:w-96 px-2 rounded h-12' type="text" name="subject" placeholder='Subject' id="" /><br />
            <textarea className='lg:w-96 px-2 rounded mb-5' name="message" placeholder='Your Message' id="" cols="" rows="5"></textarea><br />
            <input className='btn btn-primary mb-14 px-5' type="submit" value="Submit" />
           </form>
            </div>
        </div>
    );
};

export default ContactUs;