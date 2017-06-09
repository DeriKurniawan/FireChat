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
                    <h1>User Online</h1>
                  </div>
                  <div class="ui divider"></div>
                  <div class="ui one stackable cards">
                    <div class="card" v-for='user in users'>
                      <i class="user icon"></i>
                      <span @click="chatting">{{user.name}}</span>
                    </div>
                  </div>

                </div>
              </div>
          </div>
        </div>

      </div>
      </div>


      <div class="ui sidebar vertical menu" style="width:300px">
        <div class="flex-item">
          <div class="ui minimal comments" style="margin-top:60%;width:100%">
            <div class="comment">
              <a class="avatar">
                <i class="user icon"></i>
              </a>
              <div class="content">
                <a class="author">Steve Jobes</a>
                <div class="metadata">
                  <div class="date">2 days ago</div>
                </div>
                <div class="text">
                  Revolutionary!
                </div>
                <div class="actions">
                  <a class="reply active">Reply</a>
                </div>
                <form class="ui reply form">
                  <div class="field">
                    <label>Short Text</label>
                    <textarea rows="2"></textarea>
                  </div>
                  <div class="ui primary submit labeled icon button">
                    <i class="icon edit"></i> Add Reply
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
     </div>

      <div  class="flex-item ui segment" style="width:65%; background-color:white; border-radius:5px; margin-right:5%;">
          <h1>ARTICLES</h1>
          <div v-if="is_load==false" class="ui grid">
            <div class="ui divided items">
              <div class="item" v-for="(news,index) in listNews">
                <div class="image">
                  <img :src="news.urlToImage">
                </div>
                <div class="content">
                  <a class="header" :href="news.url" target="_blank">{{news.title}}</a>
                  <div class="meta">
                    <span>{{news.publishedAt}}</span>
                  </div>
                  <div class="description">
                    <p>{{news.description}}</p>
                  </div>
                  <div class="extra">
                    <a :href="news.url" target="_blank">Source:{{news.url}}</a>
                  </div>
                  <div class="grid" style="margin-top:2%">
                    <button class="ui blue button" @click="detailNews(index)">Comment</button>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div v-if="is_load==true" class="ui segment">
            <div class="ui active inverted dimmer">
              <div class="ui large text loader">Loading</div>
            </div>
            <p></p>
            <p></p>
            <p></p>
          </div>
      </div>

  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
        is_load:false
    }
  },
  computed:{
    users(){
      return this.$store.getters.getUsers;
    },
    listNews(is_load){
      // this.is_load=false;
      return this.$store.getters.getListNews
    }
  },
  methods:{
    chatting(){
      $('.ui.sidebar').sidebar('toggle');
    },
    detailNews(index){
      console.log('asdfasdf',index);
      this.$store.dispatch('getDetilNews',index)
      this.$router.push('/forum/comment')
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
