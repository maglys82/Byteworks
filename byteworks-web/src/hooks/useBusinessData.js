import { useState, useEffect } from 'react';

const useBusinessData = () => {
  const [businessData, setBusinessData] = useState(null);
  const [typeofserviceOptions, setTypeofserviceOptions] = useState([]);
  const [roleOptions, setRoleOptions] = useState([]);

  useEffect(() => {
    const fetchBusinessData = async () => {
      try {
        const response = await fetch('URL_TO_BUSINESS_DATA_ENDPOINT');
        const jsonData = await response.json();
        setBusinessData(jsonData);
        const typesOfService = [...new Set(jsonData.map(item => item.type_of_service))];
        const roles = [...new Set(jsonData.map(item => item.role))];
        setTypeofserviceOptions(typesOfService.map((type, index) => ({ id: index + 1, label: type })));
        setRoleOptions(roles.map((role, index) => ({ id: index + 1, label: role })));
      } catch (error) {
        console.error('Error fetching business data:', error);
      }
    };

    fetchBusinessData();

    return () => {
    };
  }, []);

  return { businessData, typeofserviceOptions, roleOptions };
};

export default useBusinessData;

