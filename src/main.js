import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import { quasar, router } from './plugins';

import './styles/main.scss';

// eslint-disable-next-line prettier/prettier
createApp(App)
  .use(createPinia())
  .use(quasar)
  .use(router)
  .mount('#app');
