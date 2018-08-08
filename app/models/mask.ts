import { observable, action } from 'mobx'

/**
 * 全局loading
 */

class ObservableMaskStore {
    @observable maskStore = {
        loading: false
    }
    //获取加载状态
    @action getLoadingStatus() {
        return this.maskStore.loading
    }
}



const mask = new ObservableMaskStore();
export default mask
