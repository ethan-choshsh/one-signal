import { createApp } from 'vue';
import App from './App.vue';
import OneSignalVuePlugin from '@onesignal/onesignal-vue3';

createApp(App)
  .use(OneSignalVuePlugin, {
    appId: 'e901ae0c-8ee5-4729-bec6-cfd3c12cb101',
    safari_web_id: 'web.onesignal.auto.68a78e72-ca6b-43d3-aa15-83c87cfb9ced',
    notifyButton: {
      enable: true,
    },
    allowLocalhostAsSecureOrigin: true,
  })
  .mount('#app');
