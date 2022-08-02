import {http} from './http';

export type CrewData = {
  name: string;
  agency: string;
  image: string;
  wikipedia: string;
  launches: string[];
  status: string;
  id: string;
};
export const getCrewData = () => {
  return http.get<CrewData[]>('/crew');
};
