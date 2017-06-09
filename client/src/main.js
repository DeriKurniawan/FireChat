// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('semantic-ui-css/semantic.css')
require('semantic-ui-css/semantic.js')
import Vue from 'vue'
import App from './App'
import router from './router'
import Navbar from './components/Navbar'
// import Footer from './components/Footer'
import {store} from './store'
// import firebase from 'firebase'

// var config = {
//   apiKey: "AIzaSyDdqG5rxU7jCx23JJwlpDSGSejKtlhwcW0",
//   authDomain: "firechat-8df3a.firebaseapp.com",
//   databaseURL: "https://firechat-8df3a.firebaseio.com",
//   storageBucket: "firechat-8df3a.appspot.com"
// };
//
// var firebaseApp = firebase.initializeApp(config);
// Vue.prototype.$db = firebaseApp.database()



Vue.component('navbar',Navbar)
// Vue.component('footernav',Footer)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
