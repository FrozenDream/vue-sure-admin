import { defineStore } from 'pinia'

export const getAppStore = defineStore('app', {
  state: () => ({
    // 是否左侧菜单展开状态
    isUnfold: true
  }),
  getters: {
    getIsUnfold: (state) => state.isUnfold
  },
  actions: {
    // 设置是否展开
    setIsUnFold(flag: boolean) {
      this.isUnfold = flag
    }
  }
})

export default getAppStore
