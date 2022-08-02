import {http} from './http';
type Height = {
  meters: number;
  feet: number;
};
export type RocketData = {
  name: string;
  active: boolean;
  description: true;
  flickr_images: string[];
  id: string;
  height: Height;
  wikipedia: string;
};
export const getRocketData = () => {
  return http.get<RocketData[]>('/rockets');
};
