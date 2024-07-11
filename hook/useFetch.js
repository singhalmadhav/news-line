import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endpoint, countryName) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    const options = {
        method: 'GET',
        url: `https://newsapi.org/v2/${endpoint}?country=${countryName}&apiKey=64a239894d104dc49a6c1674b2c1b2c2`,
      };
    
      const fetchData = async () => {
        setIsLoading(true)

        try {
            const response = await axios.request(options);
            setData(response.data.articles)
            setIsLoading(false)
        } catch (error) {
            setError(error);
            alert("This is an error")
        } finally {
            setIsLoading(false);
        }
      }

      useEffect(() => {
        fetchData();
      }, []);

      const refetch = () => {
        setIsLoading(true);
        fetchData();
      }

      return { data, isLoading, error, refetch }
}

export default useFetch;