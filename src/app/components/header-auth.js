'use client';

import React from "react";
import './header.css';
import Link from 'next/link';


const headermain = () =>{
    return(
        
        <div className="Header-Container">
            <div className="Header-Container-Left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Georgia_Athletics_logo.svg/300px-Georgia_Athletics_logo.svg.png" alt="KnowWhatYouEatLogo"/>
                <h1>Know What You Eat</h1>
            </div>
            <div className="Header-Container-Right">
                <p>Welcome, John Doe</p>
                <button>
                    <Link href='/'>Log Out</Link>
                </button>
            </div>
        </div>
    );
};
export default headermain;