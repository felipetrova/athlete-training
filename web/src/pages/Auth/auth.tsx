const clientId = '161979';
const redirectUri = 'http://localhost:4200/auth/callback'; // precisa estar cadastrado no Strava
const scope = 'read,activity:read';

const handleLogin = () => {
  window.location.href = `https://www.strava.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}&approval_prompt=auto`;
};

const LoginStrava = () => {
  return <button onClick={handleLogin}>Conectar com Strava</button>;
};

export default LoginStrava;
