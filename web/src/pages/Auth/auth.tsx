import { Link } from 'react-router-dom';

const clientId = '161979';
const redirectUri = 'http://localhost:4200'; // precisa estar cadastrado no Strava
const scope = 'read,activity:read';

const handleLogin = () => {
  window.location.href = `https://www.strava.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}&approval_prompt=auto`;
};

const LoginStrava = () => {
  return (
    <Link
      to="#"
      onClick={handleLogin}
      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Get started
    </Link>
  );
};

export default LoginStrava;
