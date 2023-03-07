import { createApp } from 'vue';
import App from './App.vue';
import OneSignalVuePlugin from '@onesignal/onesignal-vue3';

createApp(App)
  .use(OneSignalVuePlugin, { appId: 'e901ae0c-8ee5-4729-bec6-cfd3c12cb101' })
  .mount('#app');
