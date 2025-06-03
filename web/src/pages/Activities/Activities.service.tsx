import axios from 'axios';

const accessToken = localStorage.getItem('strava_token');
const api = axios.create({
  //   baseURL: 'http://localhost:3333/api/', // URL base da API
  baseURL: 'https://www.strava.com/api/v3',
  timeout: 10000, // tempo limite (opcional)
  headers: {
    Authorization: `Bearer ${accessToken}`, // seu token OAuth
  },
});

export const getListActivities = async () => {
  try {
    const response = await api.get(`/athlete/activities?per_page=10`);
    return response.data;
  } catch (error) {
    console.error('Error ao buscar dados: ', error);
    throw error;
  }
};

export const getActivitieDetails = async (activitiesId: number) => {
  try {
    const response = await api.get(`/activities/${activitiesId}`);
    return response.data;
  } catch (error) {
    console.error('Error ao buscar dados: ', error);
    throw error;
  }
};
