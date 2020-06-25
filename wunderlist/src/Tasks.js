import React, { useEffect, useState } from "react";
import axiosAuth from "./AxiosAuth";

export default function Tasks() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosAuth()
      .get("api/category/")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="Task">
      {data.map((taskData, i) => {
        console.log(taskData);

   return (
   <div>
       key={i}
       {taskData.cat1}
   </div>
   );
      })}
      <p>HELLLOOOO</p>
    </div>
  );
}
