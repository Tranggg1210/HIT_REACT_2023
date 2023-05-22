import React from 'react';
import Footer from '../components/footer/Footer'
import Nav from "../components/nav/Nav";
import { Outlet } from 'react-router-dom';
const Home = () => {
    return (
        <div>
            <Nav/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Home;