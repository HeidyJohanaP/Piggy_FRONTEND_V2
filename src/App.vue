<template>
  <div id="app" class="app-container">
    <div class="header" v-if="is_auth">
      <h1>Piggy Grow <img src="./assets/piggy-bank-1022853_960_720.png" width="70px" height="70px" align=middle></h1>
      
      <nav class="navbar-nav ml-auto" v-if="is_auth">
        <button v-on:click="init" v-if="is_auth" >Inicio</button>
        <button v-on:click="Movement" v-if="is_auth">Nuevo Movimiento</button>
        <button v-on:click="mostrarConsulta" v-if="is_auth">Consultar Movimientos</button>
        <button v-on:click="verReporte" v-if="is_auth">Reporte Movimientos</button>
        <button v-if="is_auth">Eliminar Movimientos </button>
        <button v-on:click="logOut" v-if="is_auth">Cerrar Sesión</button>
      </nav>

    </div>

    <div class="main-component">
      <router-view v-on:log-in="logIn"></router-view>
    </div>

    <!--<div v-dragscroll> ... </div>
    <div v-dragscroll="true"> ... </div> !-->
    

    <div class="footer" v-if="is_auth">
      <h2>Copyright @PiggyGrow Inc.</h2>
    </div>
    

  </div>
</template>

<script>
import vueRouter from 'vue-router'

export default {
  name: "App",
  
  data: function () {
    return {
      is_auth: localStorage.getItem("isAuth") || false,
    };
  },

  methods: {
    updateAuth: function(){
      var self = this
      self.is_auth  = localStorage.getItem('isAuth') || false

      if(self.is_auth == false)
        self.$router.push({name: "login"})

      else{
        let username = localStorage.getItem("current_username")
        self.$router.push({name: "user", params:{ username: username }})
      }  
    },

    logIn: function(username){
      localStorage.setItem('current_username', username)
      localStorage.setItem('isAuth', true)
      this.updateAuth()
    },

    logOut: function(){
      localStorage.removeItem('isAuth')
      localStorage.removeItem('current_username')
      this.updateAuth()
    },

    init: function(){
      if(this.$route.name != "user"){
        let username = localStorage.getItem("current_username")
        this.$router.push({name: "user", params:{ username: username }})
      } 
    },

    Movement: function() {
      let username = localStorage.getItem("current_username")       
      this.$router.push({ name: "crear_movimiento", params:{ username: username } });
    },

    mostrarConsulta: function() {
      let username = localStorage.getItem("current_username")      
      this.$router.push({ name: "consulta", params:{ username: username } })     
    },

    verReporte: function() {
      let username = localStorage.getItem("current_username")       
      this.$router.push({ name: "reporte", params:{ username: username }})
    },
   
    created: function(){
      this.$router.push({name: "root"})
      this.updateAuth()
    }

  },
  beforeCreate: function() {
    localStorage.removeItem('isAuth')    
    if (this.$route.name !="login"){
      this.$router.push({ name: "login"});
    }
  },

};

</script>

<style scoped>

  body {
    margin: 0 0 0 0;
  }

  .app-container {
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
    
  }

  .header {
    margin: 0%;
    width: 100%;
    height: auto;
    min-height: 100px;
    background-color: pink;
    color:black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: serif;
    position: fixed;
    z-index: 1;
    top: 0%;
    left: 0%;
  }

  .header h1 {
    width: 20%;
    text-align: center;
    
  }

  .header nav {
    height: 100%;
    width: 45%;
    display: flex;
    align-items: center;
    font-size: 20px;
    justify-content: space-between;
    margin-right: auto;
    margin-left: 15%;
    
  }

  .header nav button {
    color:  black;
    background:beige;
    border: 5px solid #e9e5e9;
    border-radius: 80px;
    padding: 10px 30px;
    font-family: Arial,Helvetica,sans-serif;
    font-size: 16px;
    margin: auto;
    display: flex;
    height: 4em;
    text-justify: center;
    text-align: center;
    align-items: center;
  }

   .header nav button:hover {
    color: #283747;
    background: #e5e7e9;
    border: 1px solid #e5e7e9;
  }

  .main-component {
    height: 100%;
    margin: 0%;
    padding: 0%;
    background: #fdfefe;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-top: 10%;
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 5em;
    background-color:pink;
    color: #000000; 
    bottom: 0;
    margin-top: 5%;
    margin-bottom: 0;
  }

  .footer h2 {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    padding: 2 em;
    margin: 0;
  }

</style>
