<template>

  <div class="ui secondary raised segment  menu" style="background-color:#4484CE;">
    <a href="#" style="padding-left:3%; padding-top:6px;"><h1 style="color:white">Coffe&Talk</h1></a>

    <div class="right menu">
      <a v-if="token!==''" class="ui item" style="color:white;font-size:15px"><b>Akun</b></a>
      <div class="ui custom popup akun top left transition hidden">
        <form class="ui form" style="width:250px">
        <button class="ui brown button" type="button" style="width:100%;background-color:#446CB3">Logout</button>
      </form>
      </div>
      <a  v-if="" class="ui item" style="color:white;font-size:15px" @click="showLogin"><b>Login</b></a>
      <a  v-if="" class="ui item" @click="showSignup">
          <button class="ui inverted button" @click="showSignup"><b>Signup</b></button>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      token:''
    }
  },
  methods:{
    showLogin(){
      this.$router.push('/login');
    },
    showSignup(){
      this.$router.push('/signup');
    },
    showLogout(){
      $('.ui .item')
        .popup({
          popup : $('.custom.popup'),
          on    : 'click'
        });

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
