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
        <button class="close-button" @click="handleCloseModal">Close</button> 
      </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    registrationModal: {
      type: Boolean,
    },
  },

  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },

  methods: {
    
    async registerUser() {
      const userData = {
        username: this.username,
        email: this.email,
        password: this.password,
      };

      //Call register action in the Vuex store
      await this.registerUser(userData);
      console.log('User registered successfully!');
    },

    handleCloseModal() {
      this.$emit('close-modal'); //
    } catch (error) {
      console.error('Registration failed:', error);
    }
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
