import axios from 'axios';
import { useEffect, useState } from 'react';

export const AuthCallback = () => {
  const [token, setToken] = useState(null);
  const [message, setMessage] = useState('');
  const query = new URLSearchParams(window.location.search);
  const code = query.get('code');

  useEffect(() => {
    if (!code) return;

    const getCode = async () => {
      try {
        const response = await axios.post(
          'https://www.strava.com/oauth/token',
          null,
          {
            params: {
              client_id: '161979',
              client_secret: '1e5a42cae2943b83b61d3571eba5fdd07fe35172',
              code: code,
              grant_type: 'authorization_code',
            },
          }
        );

        const { access_token } = response.data;

        localStorage.setItem('strava_token', access_token);
        console.log('Token:', access_token);
        setToken(access_token);
        setMessage('Autenticado com sucesso! Token salvo.');
      } catch (error) {
        console.error('Erro ao trocar código por token:', error);
        setMessage(`Erro ao trocar código por token: ${error}`);
      }
    };

    getCode();
  }, [code]);

  return { token, message };
};
