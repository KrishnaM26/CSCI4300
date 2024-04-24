import React from 'react';
import '../styles/items.css';
import Link from 'next/link';

const Meals =(props) => {
    return (    

    <div className='meal-item'>
   
        <li key={props.id}>
             <h2>{props.title}</h2>
             <img src={props.img} className="meal-img" alt= "meal image" />

            <Link href = "/welcome/demo" ><button>view</button></Link>
        </li>
    </div>


    );
};

export default Meals;