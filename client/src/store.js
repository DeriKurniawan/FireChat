import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state:{
    news:[],
    users:[
      {id:1,name:'Max',registered:false},
      {id:2,name:'ha',registered:false},
      {id:3,name:'he',registered:false},
      {id:4,name:'ho',registered:false},
      {id:5,name:'hi',registered:false},
    ]

  },
  mutations:{
    fillNews(state,list){
      state.news=list
      console.log('masukk-----',state);
    },
    fillSignUp(state, list){
      console.log(list);
      state.name = list.name
      state.username = list.username
      state.passowrd = list.password
      state.email = list.email
    }
  },
  actions:{
    getNews(context,category){
      axios.get(`https://newsapi.org/v1/sources?category=${category}`)
      .then(response =>{
        context.commit('fillNews',response.data.sources)
      })
    },
    signUp: function({commit}, user){
      //et self = this;
      console.log(user)
      axios.post('http://localhost:3000/api/user/signup', {
        name: user.name,
        username: user.username,
        email: user.email,
        password: user.password
      })
      .then(function(response){
        console.log('ini response -----------', response);
        if(response.data.message){
          window.location.href='http://localhost:8080/#/login'
          alert(response.data.message)
        } else {
          window.location.href='http://localhost:8080/#'
        }
        //window.location.href='http://localhost:8080/'
      })
      .catch(function(err){
        console.log(err);
      })
    }

  }

})
