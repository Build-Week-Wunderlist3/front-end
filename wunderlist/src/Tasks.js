import React, { useEffect } from "react"
import axiosAuth from "./AxiosAuth"


export default function Tasks(){

  useEffect(() => {
    axiosAuth().get("api/category").then(response =>{
        console.log(response)
    });
    
  },[]);

  return(
    <p>Hello</p>
  ) 

}