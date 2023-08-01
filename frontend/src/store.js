import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    isAuthenticated: false,
    user: null,
    isRegistrationModalVisible: false,
    isLoginModalVisible: false,
  },

  mutations: {
    SET_AUTHENTICATION(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
    SET_USER(state, user) {
      state.user = user;
    },
    CLEAR_AUTHENTICATION(state) {
      console.log('Before setting isAuthenticated to false:', state.isAuthenticated);
      state.isAuthenticated = false;
      state.user = null;
      console.log('After setting isAuthenticated to false:', state.isAuthenticated);
    },
    SET_REGISTRATION_MODAL_VISIBLE(state, visible) {
      state.isRegistrationModalVisible = visible;
    },
    SET_LOGIN_MODAL_VISIBLE(state, visible) {
      state.isLoginModalVisible = visible;
    },
  },
  actions: {
    
    showLoginModal({ commit }) {
        commit('SET_LOGIN_MODAL_VISIBLE', true);
    },

    closeLoginModal({ commit }) {
        commit('SET_LOGIN_MODAL_VISIBLE', false);
    },

    showRegistrationModal({ commit }) {
        commit('SET_REGISTRATION_MODAL_VISIBLE', true);
    },

    closeRegistrationModal({ commit }) {
        commit('SET_REGISTRATION_MODAL_VISIBLE', false);
    },

    async registerUser({ commit }, userData) {
      try {
      // HTTP POST request
      const response = await axios.post('/backend/User/register', userData);

      const registeredUser = response.data;

      // Assuming the response contains the authentication token
      const token = registeredUser.token;

      // Save the token in local storage
      localStorage.setItem('token', token);

      // Include the JWT token in the request headers
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const authenticatedUser = userResponse.data;
      console.log('Authenticated user:', authenticatedUser);

      // Make another request to the backend to get the authenticated user data
      const userResponse = await axios.get('/backend/User/current', {
        headers: headers,
      });

      commit('SET_USER', registeredUser);
      commit('SET_AUTHENTICATION', true);
    } catch (error) {
      console.error('registration failed!!')
    }
  },

    async loginUser({ commit }, userData) {
      try {
        // Send credentials to backend for authentication
        const response = await axios.post('backend/User/login', userData);
        console.log("loginUser hit");
        // Assuming the response contains authentication information
        const isAuthenticated = response.data.isAuthenticated;
        const user = response.data.user;
        const token = response.data.token;

        //debug statements
        console.log(response.data)
        console.log(isAuthenticated);
        console.log(user);
        console.log(token);

        // save token in local storage
        localStorage.setItem('token', token);

        // Include the JWT token in the request headers
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        // Make another request to the backend with the JWT token included
        const userResponse = await axios.get('/backend/User/current', {
          headers: headers,
        });

        const authenticatedUser = userResponse.data;
        console.log('Authenticated user:', authenticatedUser);

        // Commit the mutations to update the state
        commit('SET_AUTHENTICATION', true);
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
        console.log("logout");

        // Remove the token from local storage
        localStorage.removeItem('token');

        // Commit the mutation to clear the authentication state
        commit('CLEAR_AUTHENTICATION');
      } catch (error) {
        // Handle logout error
        console.error('Logout failed:', error);
      }
    },

    async loginAnonymous({ commit }) {
      try {
        const response = await axios.post('/backend/User/loginAnonymous');
        console.log('Response data:', response.data);

        // eslint-disable-next-line no-unused-vars
        const isAuthenticated = response.data.isAuthenticated;
        const user = response.data.user;
        const token = response.data.token;

        //save token in lcoal storage
        localStorage.setItem('token', token );

        // include JWT token
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        // Make another request to the backend with the JWT token included
        const userResponse = await axios.get('/backend/User/current', {
          headers: headers,
        });

        const authenticatedUser = userResponse.data;
        console.log('Authenticated user: ', authenticatedUser);

        // Commit the mutations to update the state
        commit('SET_AUTHENTICATION', true);
        commit('SET_USER', user);
      } catch (error) {
        //handle login error
        console.error('Login failed:', error);
      }
    },
  },
  // Other Vuex properties (getters, modules, etc.)
});

export default store;
