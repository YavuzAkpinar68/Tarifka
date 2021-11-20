import React, { useEffect, useState } from "react";
import axios from "axios";
import Config from "react-native-config";

const UseFetch = (endpoint) => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchData = async () =>{
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/${endpoint}`)
      setData(response.data)
      setLoading(false)
      } catch (error) {
        setError("error")
        setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])


  return{data, error, loading}
}
export default UseFetch