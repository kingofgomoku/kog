/* eslint-disable */

const state = {
  appVersion: "v1.00",
  lastUpdated: ""
};

const getters = {
  getAppVersion(state) {
    return state.appVersion;
  }
};

const mutations = {
  updateVersionc(state, version) {
    state.appVersion = version;
  }
};

const actions = {
  initiateApplication(context) {}
};

export default {
  state,
  getters,
  mutations,
  actions
};
