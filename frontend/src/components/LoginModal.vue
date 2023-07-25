<template>
  <div class="modal-content">
    <h2>Login</h2>
    <form @submit.prevent="loginUser">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button class="login-button" type="submit">Login</button>
    </form>
    <button class="close-button" @click="handleCloseModal">Close</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
// eslint-disable-next-line no-unused-vars
import { loginUser } from '../store.js';

export default {
  
  setup() {
    const username = ref("");
    const password = ref("");
    const store = useStore();

      const loginUser = () => {
        const userData = {
          username: username.value,
          password: password.value,
        };

        // HTTP POST request to backend for login
        store.dispatch("loginUser", userData)
        .then((response) => {
          console.log('response:', response);
          //close modal          
          handleCloseModal();
        })
        .catch((error) => {
          console.error('Login failed:', error);
          //console.error('Error Response:', error.response);
          console.log(userData);
        });
      };

      // eslint-disable-next-line no-unused-vars
      const handleCloseModal = () => {
        store.commit("SET_LOGIN_MODAL_VISIBLE", false);
        console.log("close");
      };

    return {
      username,
      password,
      loginUser,
      handleCloseModal,
      isLoginModalVisible: store.state.isLoginModalVisible,
    };
  },
};
</script>

<style>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 4px;
}

h2 {
  margin-top: 0;
}

.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.login-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.login-button:hover {
  background-color: #0056b3;
}
</style>
