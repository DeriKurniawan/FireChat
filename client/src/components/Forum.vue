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
                      <span>{{user.id}}||{{user.name}}</span>
                    </div>
                  </div>

                </div>
              </div>
          </div>
        </div>

      </div>
      </div>


      <!-- <div class="flex-item" style="width:30%; margin-top:15px;">
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
                    <h1>Chatting</h1>
                  </div>
                  <div class="ui divider"></div>

                  <div class="ui container flex-item">
                    <div class="ui minimal comments">
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
                              <textarea style="width:100%"></textarea>
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
              </div>
          </div>
        </div>

      </div>
      </div> -->

      <div  class="flex-item ui segment" style="width:65%; background-color:white; border-radius:5px; margin-right:5%;">
          <h1>ARTICLES</h1>
      </div>

  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      store:store
    }
  },
  computed:{
    users(){
      return this.$store.state.users;
    }
  },
  methods:{

    chooseCategory(option){
      this.$router.push('/forum')
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
