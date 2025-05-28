import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AuthCallback = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const code = query.get('code');

    if (code) {
      trocarCodigoPorToken(code);
    }
  }, []);

  const trocarCodigoPorToken = async (code: any) => {
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
      setToken(access_token);
      localStorage.setItem('strava_token', access_token);

      console.log('Token:', access_token);
    } catch (error) {
      console.error('Erro ao trocar código por token:', error);
    }
  };

  return (
    <div>
      {token ? (
        <p>Autenticado com sucesso! Token salvo.</p>
      ) : (
        <p>Autenticando com Strava...</p>
      )}
    </div>
  );
};

export default AuthCallback;
