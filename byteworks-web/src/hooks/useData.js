import { useState, useEffect } from 'react';

const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('URL_TO_BACKEND_ENDPOINT');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
    return () => {
    };
  }, []);

  return data;
};

export default useData;
