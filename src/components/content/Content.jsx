import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../header/Header'
import Testimonials from '../testimonials/Testimonials';
import Features from '../features/Features'

const Content = () => {
    return (
        <div>
            <Header />
            <Features />
            <Testimonials />
        </div>
    );
};

export default Content;