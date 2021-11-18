import React, { useEffect, useState } from "react";
import axios from "axios";

const UseFetch = () => {
  const [data, setData] = useState([])

  const fetchData = async () =>{
    const response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
    const newData = [...response, ...data]
    setData(newData)
  }

  useEffect(() => {
    fetchData()
  }, [])


  return{data}
}
export default UseFetch