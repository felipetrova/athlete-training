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
    const response = await api.get(`/athlete/activities`);
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
// http://www.strava.com/oauth/authorize?client_id=161979&response_type=code&redirect_uri=http://localhost/exchange_token&approval_prompt=force&scope=read

// 8c04ec51bb2eaebd8a2f51a579e6de19ad05b35e

// curl -X POST https://www.strava.com/oauth/token \
// 	-F client_id=161979 \
// 	-F client_secret=1e5a42cae2943b83b61d3571eba5fdd07fe35172 \
// 	-F code=8c04ec51bb2eaebd8a2f51a579e6de19ad05b35e \
// 	-F grant_type=authorization_code
