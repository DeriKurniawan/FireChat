<template>
  <div class="ui middle aligned center aligned grid ">
    <div class="column">
      <h2 class="ui blue image header">
        <div class="content">
          Sign-up
        </div>
      </h2>
      <form class="ui large form" @submit.prevent="submitSignup">
        <div class="ui stacked segment">
          <div class="field">
            <label for="">Name</label>
            <div class="ui left icon input">
              <input type="text" v-model="dataUser.name" name="name">
            </div>
          </div>
          <div class="field">
            <label for="">Email</label>
            <div class="ui left icon input">
              <input type="email" v-model="dataUser.email" name="email">
            </div>
          </div>
          <div class="field">
            <label for="">Username</label>
            <div class="ui left icon input">
              <input type="text" v-model="dataUser.username" name="username">
            </div>
          </div>
          <div class="field">
            <label for="">Password</label>
            <div class="ui left icon input">
              <input type="password" v-model="dataUser.password" name="password">
            </div>
          </div>
          <button class="ui fluid large blue submit button">Signup</button>
        </div>

        <div class="ui error message">test</div>

      </form>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'Signup',
  data() {
    return {
      dataUser: {
        name: '',
        email: '',
        username: '',
        password:''
      }
    }
  },
  methods:{
    ...mapActions(['signUp']),
    submitSignup(){
      console.log("submitSignup", this.dataUser);
      this.signUp(this.dataUser);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.ui.middle.aligned{
  width: 40%;
  margin-left: 30%;
  margin-top: 5%;
}

</style>
