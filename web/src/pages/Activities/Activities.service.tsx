import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333/api/', // URL base da API
  timeout: 10000, // tempo limite (opcional)
  /*
  headers: {
    Authorization: `Bearer ${accessToken}`, // seu token OAuth
  },
  */
});

export const getActivities = async () => {
  try {
    const response = await api.get('activities');
    return response.data;    
  } catch (error) {
    console.error('Error ao buscar dados: ', error);
    throw error;
  }
};
