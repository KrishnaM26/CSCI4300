"use client";
import React, {useState} from "react";
import NavBarAuth from "../../components/navbarAuth";
import AddFood from "@/app/components/AddFood";
import Food from "@/app/components/food";
import FoodList from "@/app/components/foodlist";
import TodaysPlan from "@/app/components/todays-plan";
import Link from "next/link";



const Demo = () =>{


const [foods, setFoods] = useState([]);

  const addUserHandler = (foodInfo) => {
    setFoods((prev) => [...prev, foodInfo]);

  };
    return(
        <div>

            <NavBarAuth/>
            <TodaysPlan/>


            <AddFood  OnAddFood={addUserHandler}/>

           
           

            <FoodList items = {foods}/>

            <Food 
            title = "Meal Plan 1"
            name = "apple"
            portion = "1"
            calories = "95"
            carbs = "2"
            protein = "2"
            />

            <Food 
            name = "milk"
            portion = "1 cup"
            calories = "103"
            carbs = "12"
            protein = "8"
            />

            <Link href = "/welcome"><button>Done</button></Link>

        </div>

 );
};

export default Demo;