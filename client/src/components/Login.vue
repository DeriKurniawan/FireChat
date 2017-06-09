<template>
  <div class="ui middle aligned center aligned grid ">
    <div class="column">
      <h2 class="ui blue image header">
        <div class="content">
          Log-in to your account
        </div>
      </h2>
      <form class="ui large form">
        <div class="ui stacked segment">
          <div class="field">
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input type="text" name="username" v-model="username" placeholder="Username">
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input type="password" name="password" v-model="password" placeholder="Password">
            </div>
          </div>
          <div class="ui fluid large blue submit button" @click="getSignin">Login</div>
        </div>

        <div class="ui error message"></div>

      </form>

      <div class="ui message">
        New to us? <a href="#">Sign Up</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods:{
    getSignin: function(){
      self = this
      axios.post('http://localhost:3000/api/user/signin', {
        username: self.username,
        password: self.password
      })
      .then((response)=>{
        console.log(response.data.token);
        var token = response.data.token
        window.localStorage.setItem('token', token)
        console.log(token);
        window.location.href = 'http://localhost:8080/forum'
        location.reload()
      })
      .catch((err)=>{
        console.log(err);
      })
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
