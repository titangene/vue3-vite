import { createApp } from 'vue';
import { createPinia } from 'pinia';

import './styles/main.scss';

import App from './App.vue';
import { quasar, router } from './plugins';

// eslint-disable-next-line prettier/prettier
createApp(App)
  .use(createPinia())
  .use(quasar)
  .use(router)
  .mount('#app');
