<template>

  <div class="ui secondary raised segment  menu" style="background-color:#4484CE;">
    <a href="#" style="padding-left:3%; padding-top:6px;"><h1 style="color:white">Coffe&Talk</h1></a>

    <div class="right menu">
      <a id="akun" class="ui item" style="color:white;font-size:15px"><b>Akun</b></a>
      <div class="ui custom popup akun top left transition hidden">
        <form class="ui form" style="width:250px">
        <button class="ui brown button" type="button" style="width:100%;background-color:#446CB3">Logout</button>
      </form>
      </div>

      <a  class="ui item" style="color:white;font-size:15px" @click="showLogin"><b>Login</b></a>
      <div  class="ui custom popup login top left transition hidden">
        <form class="ui form" style="width:100px">
        <div class="field">
          <label>Username</label>
          <input type="text" placeholder="Username">
        </div>
        <div class="field">
          <label>Password</label>
          <input type="text" placeholder="Passowrd">
        </div>
        <div class="field">
          <div class="ui checkbox">
            <input type="checkbox" tabindex="0" class="hidden" checked>
            <label>Ingat saya</label>
          </div>
          <a href="#" style="margin-left:50px">Lupa Password?</a>
        </div>
        <button class="ui brown button" type="button" style="width:100%;background-color:#446CB3">Login</button>
        <div class="ui divider"></div>
      </form>
      </div>
      <a class="ui item">
          <button id="daftar" class="ui inverted button"><b>Daftar</b></button>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {

    }
  },
  methods:{
    showLogin(){
      $('#login')
        .popup({
          popup : $('.popup .login'),
          inline     : true,
          hoverable  : true,
          position   : 'bottom center',
          on    : 'click',
        });
        console.log('bangsat');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
