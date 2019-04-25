import { MutationTree } from 'vuex';
import { RootState, Person } from '@/types';

const mutations: MutationTree<RootState> = {
  SET_TOKEN( state: RootState, token: string): void {
    state.token = token;
  },
  SET_PEOPLE(state: RootState, people: Person[]): void {
    state.people = people;
  },
};

export default mutations;
