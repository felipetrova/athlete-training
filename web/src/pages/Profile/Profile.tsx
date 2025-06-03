import { useEffect, useState } from 'react';

import Header from '../../components/Header';
import { ProfileProps } from './type';
import { getProfile } from './Profile.service';
import Loading from '../../components/Loading';

export default function Profile() {
  const [profile, setProfile] = useState<ProfileProps>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getDate = async () => {
      try {
        const res = await getProfile();
        setProfile(res);
      } catch (error) {
        setError(`Falha ao carregar o perfil. ${error}`);
      } finally {
        setLoading(false);
      }
    };
    getDate();
  }, []);

  if (error) {
    console.error('Erro ao trocar código por token:', error);
  }

  return (
    <div className="bg-white">
      <Header title="" />

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            Profile Page
          </h1>

          {loading && <Loading />}

          {profile && (
            <div className="mt-8 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src={profile.profile}
                loading="lazy"
                alt={`${profile.firstname} profile`}
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {profile.firstname} {profile.lastname} - {profile.bio}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {profile.city} - {profile.state} / {profile.country}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
