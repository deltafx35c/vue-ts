import { GetterTree } from 'vuex';
import { RootState, Person } from '@/types';

const getters: GetterTree<RootState, any> = {
  token(state: RootState): string {
    return state.token;
  },
  somePeople(state: RootState): Person[] {
    return state.people.slice(0, 50);
  },
};

export default getters;
