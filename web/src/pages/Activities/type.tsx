export type SportType = 'Run' | 'Swim' | 'Ride';

export interface Athlete {
  id: number;
  resource_state: number;
}

export interface ListActivitiesProps {
  id: number;
  sport_type: SportType;
  start_date_local: string;
  timezone: string;
  name: string;
  moving_time: string;
  distance: string;
  total_elevation_gain: number;
}

// export type ActivitieDetailsProps = ListActivitiesProps & {};
export interface ActivitieDetailsProps extends ListActivitiesProps, Athlete {
  elapsed_time: number;
  type: SportType;
  start_date: string;
  map: {
    id: string;
    summary_polyline: string;
    resource_state: number;
  };
  average_speed: number;
  max_speed: number;
  has_heartrate: boolean;
  average_heartrate: number;
  max_heartrate: number;
}
