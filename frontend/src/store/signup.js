import { createStore } from 'vuex';

export default createStore({
  state: {
    userInfo: {
      userSub: null,
    }
  },
  mutations: {
    setUserInfo(state, payload) {
      state.userInfo = { ...state.userInfo, ...payload };
    },
    setUserSub(state, sub) {  // 이름 변경: setSub -> setUserSub
      state.userInfo.userSub = sub;  // 이름 변경: sub -> userSub
    }
  },
  getters: {
    getUserInfo: state => state.userInfo,
    getUserSub: state => state.userInfo.userSub  // 이름 변경: getSub -> getUserSub
  }
});