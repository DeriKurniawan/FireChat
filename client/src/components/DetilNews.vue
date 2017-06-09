<template>
  <div class="flex-container" style="margin-left:5%;">

      <div class="flex-item" style="width:30%; margin-top:15px;">
        <div class="ui items">
          <div class="item floating">

            <div class="ui special cards">
              <div class="card">
                <div class="blurring dimmable image">
                  <div class="ui dimmer">
                    <div class="content">

                    </div>
                  </div>

                </div>
                <div class="content center aligned ">
                  <div class="header" style="font-size:30px">
                    <h1>Categories</h1>
                  </div>
                    <div class="content">
                      <ul>
                        <li @click="getNews('general')"><router-link to ="/forum/">General</router-link></li>
                        <li @click="getNews('sport')"><router-link to ="/forum/">Sports</router-link></li>
                        <li @click="getNews('business')"><router-link to ="/forum/">Business</router-link></li>
                        <li @click="getNews('politics')"><router-link to ="/forum/">Politics</router-link></li>
                        <li @click="getNews('technology')"><router-link to ="/forum/">Technology</router-link></li>
                      </ul>
                    </div>
                </div>
              </div>
          </div>
        </div>

      </div>
      </div>

      <div  class="flex-item ui segment" style="width:65%; background-color:white; border-radius:5px; margin-right:5%;">
          <h1><b>NEWS</b></h1>
          <div class="content">
            <div class="ui divided items">
              <div class="item">
                <div class="image">
                  <img :src="detailNews.urlToImage">
                </div>
                <div class="content">
                  <a class="header" :href="detailNews.url" target="_blank">{{detailNews.title}}</a>
                  <div class="meta">
                    <span>{{detailNews.publishedAt}}</span>
                  </div>
                  <div class="description">
                    <p>{{detailNews.description}}</p>
                  </div>
                  <div class="extra">
                    <a :href="detailNews.url" target="_blank">Source:{{detailNews.url}}</a>
                  </div>
                  <div class="grid" style="margin-top:2%">
                    <button class="ui blue button" @click="detailNews(index)">Comment</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="ui divider" style="margin-top:5%; margin-bottom:5%;"></div>
          <div class="content flex-item">
            <div class="ui comments" style="width:100%">
              <div class="comment" v-for="comment in comments">
                <a class="avatar">
                  <img src="/images/avatar/small/christian.jpg">
                </a>
                <div class="content">
                  <a class="author">Christian Rocha</a>
                  <div class="metadata">
                    <div class="date">2 days ago</div>
                  </div>
                  <div class="text">
                    {{comment.body}}
                  </div>
                  <div class="actions">
                    <a class="reply">Reply</a>
                  </div>
                </div>
              </div>
              <form class="ui reply form" style="width:100%" @submit.prevent="addComment">
                <div class="field">
                  <textarea v-model="newComment.body"></textarea>
                </div>
                <div class="ui primary submit labeled icon button" @click="addComment">
                  <i class="icon edit"></i> Add Comment
                </div>
              </form>
            </div>
          </div>
      </div>

  </div>
</template>

<script>

// import firebase from 'firebase'
// var config = {
//   apiKey: "AIzaSyDdqG5rxU7jCx23JJwlpDSGSejKtlhwcW0",
//   authDomain: "firechat-8df3a.firebaseapp.com",
//   databaseURL: "https://firechat-8df3a.firebaseio.com",
//   storageBucket: "firechat-8df3a.appspot.com"
// };
//
// var firebaseApp = firebase.initializeApp(config);
// var db = firebaseApp.database()
//
// var starCountRef = firebase.database().ref().child('comments');
//   starCountRef.on('value', function(snapshot) {
//        commentsRef=snapshot.val();
//   });

export default {
  name: 'Home',
  data() {
    return {
      comments:commentsRef,
      newComment:{
        id:1,
        body:''
      }
    }
  },
  computed:{
    detailNews(){
      return this.$store.getters.getDetilNews;
    }
  },
  methods:{
    addComment(){
          commentsRef.push(this.newComment);
          this.newComment.id=this.newComment.id+1;
          this.newComment.body='';
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.flex-container{
   display: flex;
   flex-wrap: wrap;
}

.flex-item {
  flex-direction: row;
  float: left;
  border-radius: 5px;
}
h1{
  text-align: center;
}
</style>
