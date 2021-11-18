import React, { useEffect, useState } from "react";
import axios from "axios";

const UseFetch = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  const fetchData = async () =>{
    try {
      const response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
      setData(response.data)
      } catch (error) {
        setError("error")
        setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])


  return{data, error}
}
export default UseFetch