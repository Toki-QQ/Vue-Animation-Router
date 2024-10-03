import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import { router } from "@/router";
import { createPinia } from "pinia";

import PrimeVue from "primevue/config";
import "primeicons/primeicons.css";
import Aura from "@primevue/themes/aura";

//代替v-html
import VueDOMPurifyHTML from "vue-dompurify-html";

import App from "./App.vue";
import "./index.css";

const app = createApp(App);
const head = createHead();
const pinia = createPinia();

app.use(head);
app.use(router);
app.use(pinia);
app.use(VueDOMPurifyHTML);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.mount("#app");
