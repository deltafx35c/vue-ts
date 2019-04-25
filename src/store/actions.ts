import { ActionTree } from 'vuex';
import { RootState } from '@/types';

const actions: ActionTree<RootState, any> = {
  /**
   * 深拷贝
   * @param params
   */
  async deep({state, commit} , params: any) {
    let obj = {};
    obj = JSON.parse(JSON.stringify(params));
    return obj;
  },
};

export default actions;
