import { createApp } from 'vue';
import { createPinia } from 'pinia';

import './styles/main.scss';

import App from './App.vue';
import { quasar, router } from './plugins';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(quasar);

app.mount('#app');
