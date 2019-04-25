import { Person } from '@/types';

export interface RootState {
  token: string;
  people: Person[];
}
