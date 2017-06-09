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
                        <li @click="getNews('entertainment')"><router-link to ="/forum/">Entertainment</router-link></li>
                        <li @click="getNews('gaming')"><router-link to ="/forum/">Gaming</router-link></li>
                      </ul>
                    </div>
                </div>
              </div>
          </div>
        </div>

      </div>
      </div>

      <div  class="flex-item ui segment" style="width:65%; background-color:white; border-radius:5px; margin-right:5%;">
          <h1>Let's <b>BACOT</b> with us</h1>
      </div>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {

    }
  }
  ,
  methods:{
    getNews(category){
      this.$store.dispatch('getNews',category)
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
