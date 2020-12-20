<template>
  <div id="logIN" class="login">
    <div class="container_user_login">
      <h2>Bienvenido a PiggyGrow!</h2>
      <br />

      <form v-on:submit.prevent="processLogueo">
        
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="text" v-model="user_in.username" placeholder="Username" />
        <br />
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" v-model="user_in.password" placeholder="Password"/>
        <br />
        <button type="submit">Iniciar Sesion</button>
        <br />

        <label class="form-label2">O iniciar sesión con </label>
        <br />
        <button type="submit" class="btn2">Google</button>
        <button type="submit" class="btn3">Facebook</button>
        <label> ¿No tienes una cuenta? Registrarse</label>

      </form>
  
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "login",

  data: function() {
    return {
      user_in: {
        username: "Heidy",
        password: "1234"
      }
    }
  },

  methods: {

    processLogueo: function() {
      var self = this;
      axios
        .post("http://127.0.0.1:8000/logIn", self.user_in, { headers: {} })
        .then(result => {
          alert("Autenticación Exitosa");
          self.$emit("log-in", self.user_in.username);
        })
        .catch(error => {
          if (error.response.status == "404")
            alert("ERROR 404: Usuario no encontrado.");

          if (error.response.status == "403")
            alert("ERROR 403: Contraseña Erronea.");
        });
    }
  },
  
  /*validations:{
    user:{
      email:{
        required,
        minLength:minLength(4)

      },
      password:{
        required,
        minLength:minLength(5)
      }
    }
  }*/
};
</script>

<style scoped>
.login {
  margin: 0;
  padding: 14em;
  height: 100%;
  width: 100%;
  display: flex;

  background-image: url(../assets/FondoLogueo.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  
}

.container_user_login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  width: 45%;
  height: 80%;
  left: 47px;
  top: 41px;

  background: rgba(10, 11, 11, 0.5);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.login h2 {
  /* Title */
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
  color: #e5e7e9;
  left: 52px;

  /* Bienvenido a PiggyGrow! */
  position: absolute;
  width: 475px;
  height: 44px;
  left: 52px;
  top: 3%;
}

.login form {
  width: 80%;
  
}

.login label {
  color: #e5e7e9;
  justify-content: center;
  align-items: center;
}

.login input {
  height: 40px;
  width: 100%;

  box-sizing: border-box;
  padding: 10px 20px;
  margin: 5px 0;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5));
  background: #1e2126;
  border-radius: 6px;

}

.login button {
  width: 100%;
  height: 40px;

  color: #e5e7e9;
  border: 1px solid #e5e7e9;
  background: linear-gradient(180deg, #3969fc 0%, #224499 100%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  border-radius: 9px;

  padding: 10px 25px;
  margin: 5px 0;

}

.login button:hover {
  color: #e5e7e9;
  background: crimson;
  border: 1px solid #283747;
}</style
>;
