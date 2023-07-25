import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    isAuthenticated: false,
    user: null,
    registrationModalVisible: false,
    loginModalVisible: false,
  },

  mutations: {
    SET_AUTHENTICATION(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
    SET_USER(state, user) {
      state.user = user;
    },
    CLEAR_AUTHENTICATION(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
    SET_REGISTRATION_MODAL_VISIBLE(state, visible) {
      state.registrationModalVisible = visible;
    },
    SET_LOGIN_MODAL_VISIBLE(state, visible) {
      state.loginModalVisible = visible;
    },
  },
  actions: {
    async registerUser({ commit }, userData) {
      // HTTP POST request
      const response = await axios.post('/backend/User/register', userData);

      const registeredUser = response.data;

      commit('SET_USER', registeredUser);
      commit('SET_AUTHENTICATION', true);
    },

    async loginUser({ commit }, userData) {
      try {
        // Send credentials to backend for authentication
        const response = await axios.post('backend/User/login', userData);

        // Assuming the response contains authentication information
        const isAuthenticated = response.isAuthenticated;
        const user = response.user;

        // Commit the mutations to update the state
        commit('SET_AUTHENTICATION', isAuthenticated);
        commit('SET_USER', user);
      } catch (error) {
        // Handle login error
        console.error('Login failed:', error);
      }
    },
    async logoutUser({ commit }) {
      try {
        // asynchronous logout request to the server
        await axios.post('/backend/User/logout');

        // Commit the mutation to clear the authentication state
        commit('CLEAR_AUTHENTICATION');
      } catch (error) {
        // Handle logout error
        console.error('Logout failed:', error);
      }
    },
  },
  // Other Vuex properties (getters, modules, etc.)
});

export default store;
