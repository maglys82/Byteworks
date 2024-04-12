import { useState, useEffect } from 'react';
import axios from 'axios';

const UseFetchData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.mockfly.dev/mocks/c50a65da-18d7-4274-96c8-699ac98eb2c9/users');
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