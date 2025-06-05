// 🔥 Tipo dos dados que vem do Strava (pode ser expandido)
export interface Profile {
  id: number;
  username: string;
  firstname: string;
  lastname: string;
  city: string;
  state: string;
  country: string;
  profile: string; // URL da foto
  bio: string;
}
