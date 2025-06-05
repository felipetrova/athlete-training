import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header';
import Loading from '../../components/Loading';
import {
  fetchActivities,
  selectActivities,
  selectActivitiesError,
  selectActivitiesStatus,
} from '../../features/activities/activitiesSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';

export default function Activities() {
  const dispatch = useAppDispatch();
  const activities = useAppSelector(selectActivities);
  const status = useAppSelector(selectActivitiesStatus);
  const error = useAppSelector(selectActivitiesError);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchActivities());
    }
  }, [status, dispatch]);

  if (status === 'failed') {
    console.error('Error:', error);
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

          {status === 'loading' ? (
            <Loading />
          ) : (
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
                {activities.map((item) => (
                  <tr className="text-center" key={item.id}>
                    <td className="border border-gray-300 text-white">
                      {item.sport_type}
                    </td>
                    <td className="border border-gray-300 text-white">
                      {item.start_date_local}
                    </td>
                    <td className="border border-gray-300 text-white">
                      {item.name}
                    </td>
                    <td className="border border-gray-300 text-white">
                      {item.moving_time}
                    </td>
                    <td className="border border-gray-300 text-white">
                      {item.distance}
                    </td>
                    <td className="border border-gray-300 text-white">
                      {item.total_elevation_gain}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
