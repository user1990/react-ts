import Axios from 'axios';
import { useEffect, useState } from 'react';

interface Resources {
  id: 'string';
  title: 'string';
}

export const useResources = (resourceName: string) => {
  const [resources, setResources] = useState<Resources[]>([]);

  const fetchResources = async (resourceName: string) => {
    const response = await Axios.get(`https://jsonplaceholder.typicode.com/${resourceName}`);

    setResources(response.data);
  };

  useEffect(() => {
    fetchResources(resourceName);
    return () => {};
  }, []);

  return resources;
};
