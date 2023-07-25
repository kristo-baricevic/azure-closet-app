<template>
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
    <button class="close-button" @click="handleCloseModal">Close</button>
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
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

submit-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

submit-button:hover {
  background-color: #0056b3;
}

close-button {
}

</style>
