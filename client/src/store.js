import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state:{
    registration:[],
    users:[
      {id:1,name:'Max',registered:false},
      {id:2,name:'ha',registered:false},
      {id:3,name:'he',registered:false},
      {id:4,name:'ho',registered:false},
      {id:5,name:'hi',registered:false},
    ]
  }
})