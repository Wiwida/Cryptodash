import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import PrimeVue from 'primevue/config';
import Dialog from 'primevue/dialog';
import Card from 'primevue/card';

import 'primevue/resources/themes/saga-blue/theme.css';       //theme
import 'primevue/resources/primevue.min.css';                 //core css
import 'primeicons/primeicons.css';                           //icons

createApp(App)

    .use(store)
    .use(router)

    .use(PrimeVue)

    .component('Dialog', Dialog)
    .component('Card', Card)

.mount("#app");
