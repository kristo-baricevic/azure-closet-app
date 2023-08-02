import { createApp } from 'vue';
import App from './App.vue';
import store from './store.js';

const app = createApp(App);

//attach Vuex store to main Vue instance
app.use(store);

app.mount('#app');