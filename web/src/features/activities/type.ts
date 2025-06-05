export type SportType = 'Run' | 'Swim' | 'Ride';

export interface Athlete {
  id: number;
  resource_state: number;
}

export interface Activity {
  id: number;
  name: string;
  distance: number;
  moving_time: number;
  elapsed_time: number;
  type: string;
  start_date: string;
  start_date_local: string;
  sport_type: SportType;
  total_elevation_gain: number;
}
