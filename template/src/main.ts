import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from '@/plugins/router';

// https://github.com/typescript-eslint/typescript-eslint/issues/2865
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
