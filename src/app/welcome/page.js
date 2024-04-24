"use client";
import React, {useState} from "react";
import NavbarAuth from "../components/navbarAuth";
import TodaysPlan from "../components/todays-plan";
import Button from "../components/button";
import Link from "next/link";
import ItemList from "../components/itemlist";
import Item from "../components/items";

export default function() {

    const [foods, setFoods] = useState([]);

  const addUserHandler = (foodInfo) => {
    setFoods((prev) => [...prev, foodInfo]);
  };

  
    return (
        <div>
            <NavbarAuth />
            <TodaysPlan/>
        
            <Link href="/welcome/addplan"><button>Add New Plan</button> </Link>

            <Item
              title = "meal plan 1"
              img = "https://alumni.uga.edu/wp-content/uploads/10_Uga_X.jpg"/>
        </div>
    )
}