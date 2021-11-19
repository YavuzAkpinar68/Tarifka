import React, { useEffect, useState } from "react";
import axios from "axios";
import Config from "react-native-config";

const UseFetch = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  const fetchData = async () =>{
    try {
      const response = await axios.get(Config.API_URL)
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