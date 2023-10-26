// import devtools from '@vue/devtools'

// // @ts-ignore
// if (process.env.NODE_ENV === 'development') {
//   // devtools.connect(/* host, port */)
//   // (window as any) = devtools
//   // @ts-ignore
//   window.devtools = devtools
// }

import "@/assets/css/main.css";
import "uno.css";
import "mosha-vue-toastify/dist/style.css";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

import { createApp } from "vue";
import pinia from "@/plugins/pinia";
import head from "@/plugins/head";
import vueQuery from "@/plugins/vueQuery";
import vuetify from "@/plugins/vuetify";

import App from "@/App.vue";
import router from "@/router";

const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(head);
app.use(vueQuery);
app.use(vuetify);

app.mount("#app");
