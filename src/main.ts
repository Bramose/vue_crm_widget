import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import type { ButtonWidget } from './interfaces/ButtonWidget';

const appData: ButtonWidget = {
  ButtonPosition: null,
  Entity: null,
  EntityId: null,
};

window.ZOHO.embeddedApp.on('PageLoad', function (appData: ButtonWidget) {
  const { ButtonPosition, Entity, EntityId } = appData;
  appData.ButtonPosition = ButtonPosition;
  appData.Entity = Entity;
  appData.EntityId = EntityId;
  const app = createApp(App);
  app.use(createPinia());
  app.use(router);
  app.mount('#app');
});

window.ZOHO.embeddedApp.init();
window.ZOHO.Record = appData;
