<template>
<div class="modal">
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
    <button class="close-button-login" @click="handleCloseModal">Close</button>
  </div>
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 400px;
}

h2 {
  margin-top: 0;
}

.form-group {
  margin-bottom: 10px;
}

label {
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
  display: block;
  margin: 5px;
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #50C878;
  color: black;
  border: 1px solid black;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #228B22;
  color: black;
}

.close-button-login {
  display: block;
  margin: 5px;
  width: 83px;
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #50C878;
  color: black;
  border: 1px solid black;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.close-button-login:hover {
  background-color: #228B22;
  color: black;
}
</style>
