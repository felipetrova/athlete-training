import { useEffect, useState } from 'react';

import { getActivities } from './Activities.service';
import { ActivitiesProps } from './type';
import Header from '../../components/Header';

export default function Activities() {
  const [activities, setActivities] = useState<ActivitiesProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getActivities();
        console.log(res);
        setActivities(res);
      } catch (error) {
        setError(`Falha ao carregar os dados: ${error}`);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) {
    return <div className="loader">Loading...</div>;
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
            Activities Page
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            This is the activities page of the app.
          </p>

          <table className="w-full border-collapse border border-gray-400 bg-white text-sm dark:border-gray-500 dark:bg-gray-800">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="w-1/2 border border-gray-300 p-4 text-left font-semibold text-gray-900 dark:border-gray-600 dark:text-gray-200">
                  Esporte
                </th>
                <th className="w-1/2 border border-gray-300 p-4 text-left font-semibold text-gray-900 dark:border-gray-600 dark:text-gray-200">
                  Data
                </th>
                <th className="w-1/2 border border-gray-300 p-4 text-left font-semibold text-gray-900 dark:border-gray-600 dark:text-gray-200">
                  Título
                </th>
                <th className="w-1/2 border border-gray-300 p-4 text-left font-semibold text-gray-900 dark:border-gray-600 dark:text-gray-200">
                  Tempo
                </th>
                <th className="w-1/2 border border-gray-300 p-4 text-left font-semibold text-gray-900 dark:border-gray-600 dark:text-gray-200">
                  Distância
                </th>
                <th className="w-1/2 border border-gray-300 p-4 text-left font-semibold text-gray-900 dark:border-gray-600 dark:text-gray-200">
                  Elevação
                </th>
              </tr>
            </thead>
            <tbody>
              {activities.map((act) => (
                <tr className="text-center">
                  <td className="border border-gray-300 text-white">
                    {act.sport_type}
                  </td>
                  <td className="border border-gray-300 text-white">
                    {act.start_time}
                  </td>
                  <td className="border border-gray-300 text-white">
                    {act.title}
                  </td>
                  <td className="border border-gray-300 text-white">
                    {act.moving_time}
                  </td>
                  <td className="border border-gray-300 text-white">
                    {act.distance}
                  </td>
                  <td className="border border-gray-300 text-white">
                    {act.elevation_gain}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
