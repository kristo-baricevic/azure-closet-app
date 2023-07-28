<template>
<div class="modal">
  <div class="modal-content">
    <h2>Register</h2>
    <form @submit.prevent="registerUser">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button class="submit-button" type="submit">Register</button>
    </form>
    <button class="close-button-register" @click="handleCloseModal">Close</button>
  </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
// eslint-disable-next-line no-unused-vars
import { registerUser } from '../store.js';


export default {

  setup() {
    const username = ref("");
    const email = ref("");
    const password = ref("");
    const store = useStore();

    const registerUser = async () => {
      try {
        const userData = {
          username: username.value,
          email: email.value,
          password: password.value,
        };

        // Call register action in the Vuex store
        await store.dispatch('registerUser', userData);
        console.log('User registered successfully!');
      } catch (error) {
        console.error('Registration failed:', error);
      }
    };

     // eslint-disable-next-line no-unused-vars
      const handleCloseModal = () => {
        store.commit("SET_REGISTRATION_MODAL_VISIBLE", false);
        console.log("close");
      };

    return {
      username,
      email,
      password,
      handleCloseModal,
      registerUser,
      isRegistrationModalVisible: store.state.isRegistrationModalVisible,
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
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.submit-button {
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

.submit-button:hover {
  background-color: #0056b3;
}

.close-button-register {
  display: block;
  margin: 5px;
  width: 71px;
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #50C878;
  color: black;
  border: 1px solid black;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.close-button-register:hover {
  background-color: #228B22;
  color: black;
}

</style>
