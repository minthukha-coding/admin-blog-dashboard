import { useState,useEffect } from "react";
import axios from "axios";

export const GetDataHook = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(()=> {
      setLoading(true)
      axios.get(url).then((res) => {
        console.log(res.data.data)
        setData(res.data.data)
        setLoading(false)
      }).catch((err) => console.error(err))
    }, [])
    return {data, loading}
  }