export type SportType = 'Run' | 'Bike' | 'Ride';

export type ActivitiesProps = {
  id: number;
  sport_type: SportType;
  start_time: string;
  title: string;
  moving_time: string;
  distance: string;
  elevation_gain: string;
};
