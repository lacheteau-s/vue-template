import '@/styles/global.scss';

import { createApp } from 'vue';
import App from './App.vue';
import vuetify from '@/plugins/vuetify';

// https://github.com/typescript-eslint/typescript-eslint/issues/2865
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
const app = createApp(App);

app.use(vuetify);

app.mount('#app');
