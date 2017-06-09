<template>

  <div class="ui secondary raised segment  menu" style="background-color:#4484CE;">
    <a href="#" style="padding-left:3%; padding-top:6px;"><h1 style="color:white">Coffe&Talk</h1></a>

    <div class="right menu">
      <a v-if="isLogin" class="ui item" style="color:white;font-size:15px" @click="showLogout"><b>Logout</b></a>
<!--      <div class="ui custom popup akun top left transition hidden">
        <form class="ui form" style="width:250px">
        <button class="ui brown button" type="button" style="width:100%;background-color:#446CB3" @click="">Logout</button>
      </form>
    </div> -->

      <a  v-if="!isLogin" class="ui item" style="color:white;font-size:15px" @click="showLogin"><b>Login</b></a>
      <a  v-if="!isLogin" class="ui item" @click="showSignup">
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
      token:'',
      isLogin: false
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
      // (this.token)
     localStorage.clear()
     this.isLogin = false
     location.reload()

    }
  },
  created(){
    this.token = localStorage.getItem('token')
    if(localStorage.getItem('token')) {
      this.isLogin = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
