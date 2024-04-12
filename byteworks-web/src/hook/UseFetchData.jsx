import { useState, useEffect } from 'react';
import axios from 'axios';

const UseFetchData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/users');
        const json = await response.data; // change response.json() to response.data
        setData(json);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return data;
};

export default UseFetchData;