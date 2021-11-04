import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

const app  =createApp(App);
app.user(createPinia());
app.mount("#app");
