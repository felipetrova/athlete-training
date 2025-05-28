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

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="bg-white">
      <Header title="" />

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            Profile Page
          </h1>
          {profile && (
            <>
              {profile.profile_medium !== '' && (
                <img
                  className="mask-radial-[100%_100%] mask-radial-from-75% mask-radial-at-left"
                  src={profile.profile_medium}
                  alt={`${profile.firstname} profile`}
                  loading="lazy"
                />
              )}
              <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                {profile.firstname} {profile.lastname} - {profile.bio}
              </p>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                {profile.city} - {profile.state} / {profile.country}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
