'use client';
import React from 'react';
import Link from 'next/link';
import TodaysPlan from "../components/todays-plan";
import '../styles/header.css';

const NavbarAuth = () => {
    return (
        <div className="Header-Container">
        <div className="Header-Container-Left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Georgia_Athletics_logo.svg/300px-Georgia_Athletics_logo.svg.png" alt="KnowWhatYouEatLogo"/>
            <h1>Know What You Eat</h1>
        </div>
        <div className="Header-Container-Right">
            <p>Welcome!</p>
           
                <Link href='/'> <button>Log Out </button></Link>
           
        </div>
     
    </div>

    );

}

export default NavbarAuth;