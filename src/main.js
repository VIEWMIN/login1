import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue } from 'bootstrap-vue'
import firebase from "firebase"

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.config.productionTip = false;
Vue.use(BootstrapVue)

var firebaseConfig = {
  apiKey: "AIzaSyDShxVuVS78WAqo4FIYGERlw25sFKeN7L4",
  authDomain: "login-6ffc4.firebaseapp.com",
  projectId: "login-6ffc4",
  storageBucket: "login-6ffc4.appspot.com",
  messagingSenderId: "180846544006",
  appId: "1:180846544006:web:5d6e4625de0107926efd07",
  measurementId: "G-MGLRX5BFRD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
