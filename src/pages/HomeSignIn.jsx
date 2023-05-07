import React from 'react';
import HeaderSignIn from '../components/header/HeaderSignIn'
import Features from '../components/features/Features'
import Testimonials from '../components/testimonials/Testimonials';
import Footer from '../components/footer/Footer'
const HomeSignIn = () => {
    return (
        <div>
            <HeaderSignIn/>
            <Features/>
            <Testimonials/>
            <Footer/>
        </div>
    );
};

export default HomeSignIn;