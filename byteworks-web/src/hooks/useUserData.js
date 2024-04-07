import { useState, useEffect } from 'react';

const useUserData = (userId) => {
  const [UserData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`URL_TO_BACKEND_ENDPOINT/User/${UserId}`);
        const jsonData = await response.json();
        setUserData(jsonData);
      } catch (error) {
        console.error('Error fetching User data:', error);
      }
    };

    fetchUserData();

    return () => {
    };
  }, [userId]);

  return UserData;
};

export default useUserData;
