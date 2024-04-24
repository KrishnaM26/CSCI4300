'use client'
import React from "react";
import LoginForm from "../components/logform";
import { AuthProvider } from "@/context/AuthProvider";

export default function(){
    return(
      
        <div>
            <LoginForm />
        </div>
       
      
    )
}