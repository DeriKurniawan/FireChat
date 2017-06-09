import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state:{
    listNews:[],
    detailNews:{},
    users:[
      {id:1,name:'Max',registered:false},
      {id:2,name:'ha',registered:false},
      {id:3,name:'he',registered:false},
      {id:4,name:'ho',registered:false},
      {id:5,name:'hi',registered:false},

    ]
  },
  getters:{
    getUsers(state){
      return state.users;
    },
    getListNews(state){
      return state.listNews;
    },
    getDetilNews(state){
      return state.detailNews;
    }
  },
  mutations:{
    fillNews(state,list){
      state.listNews=list
      console.log('masukk-----',state);
    },

    fillDetilNews(state,index){
      state.detailNews=state.listNews[index]
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
    getNews({commit},category){
      axios.get(`https://newsapi.org/v1/sources?category=${category}`)
      .then(response =>{
        let source = response.data.sources[0].id
        console.log('ini spudfsdf',source);
        axios.get(`https://newsapi.org/v1/articles?source=${source}&apiKey=2b8dc8cd0b964e7d87e5e805a531bc27`)
        .then(response =>{
          console.log('asdfasdffsa',response.data);
          commit('fillNews',response.data.articles)
        })
    getNews({ commit },category){
      axios.get(`https://newsapi.org/v1/sources?category=${category}`)
      .then(response =>{
        commit('fillNews',response.data.sources)
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
    },
    getDetilNews({commit},index){
      commit('fillDetilNews',index)
    }

  }

})
