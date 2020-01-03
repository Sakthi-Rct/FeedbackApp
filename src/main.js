import Vue from "vue";
import firebase from "firebase";
import App from "./App.vue";
import router from "./router";
import store from "./store/index.js";

Vue.config.productionTip = false;

let app = '';

var firebaseConfig = {
  apiKey: "AIzaSyBWvD1Vp9L8YCmcNOY-Xksy807VJ0ETIoQ",
  authDomain: "vue-feedback-app.firebaseapp.com",
  databaseURL: "https://vue-feedback-app.firebaseio.com",
  projectId: "vue-feedback-app",
  storageBucket: "vue-feedback-app.appspot.com",
  messagingSenderId: "741447066653",
  appId: "1:741447066653:web:9a21ca3f51f7172b78d2f4",
  measurementId: "G-DRB02RJCDG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
})