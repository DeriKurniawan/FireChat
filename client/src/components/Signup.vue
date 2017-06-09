<template>
  <div class="ui middle aligned center aligned grid ">
    <div class="column">
      <h2 class="ui blue image header">
        <div class="content">
          Sign-up
        </div>
      </h2>
      <form class="ui large form">
        <div class="ui stacked segment">
          <div class="field">
            <label for="">Name</label>
            <div class="ui left icon input">
              <input type="text" name="name">
            </div>
          </div>
          <div class="field">
            <label for="">Email</label>
            <div class="ui left icon input">
              <input type="email" name="email">
            </div>
          </div>
          <div class="field">
            <label for="">Username</label>
            <div class="ui left icon input">
              <input type="text" name="username">
            </div>
          </div>
          <div class="field">
            <label for="">Password</label>
            <div class="ui left icon input">
              <input type="password" name="password">
            </div>
          </div>
          <div class="ui fluid large blue submit button" @click="signUp">Signup</div>
        </div>

        <div class="ui error message">test</div>

      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Signup',
  data() {
    return {

    }
  },
  methods:{
    signUp: function(){
      axios.post('http://localhost:3000/api/user/signup', {
        name: this.name,
        username: this.username,
        email: this.email,
        password: this.password
      })
      .then(function(response){
        console.log(response.data);
        window.location.href='http://localhost:8080/'
      })
      .catch(function(err){
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
