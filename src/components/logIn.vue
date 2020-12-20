<template>
  <div id="logIN" class="login">
    <div class="container_user_login">
      <h2>Bienvenido a PiggyGrow!</h2>

      <form v-on:submit.prevent="processUserLogueo">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="text" v-model="user_in.username" placeholder="Username" />
        <br />
        <input
          type="password"
          v-model="user_in.password"
          placeholder="Password"
        />
        <br />
        <button type="submit" v-on:click="InicioSesion">Iniciar Sesion</button>
        <button type="submit">Google</button>
        <button type="submit">Facebook</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "user_login",

  data: function() {
    return {
      user_in: {
        username: "",
        password: ""
      }
    };
  },

  methods: {
    processUserLogueo: function() {
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
  }
};
</script>

<style scoped>

.login {
  margin: 0;
  padding: 0%;
  height: 100%;
  width: 100%;
  display: flex;

  background-image: url(../assets/FondoLogueo.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
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

.login form {
  width: 50%;
}

.login h2 {
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
  color: #e5e7e9;
  left: 52px;
  top: 20%;
}

.login form {
  width: 50%;
}

.login input {
  height: 40px;
  width: 100%;

  box-sizing: border-box;
  padding: 10px 20px;
  margin: 5px 0;

  border: 1px solid #283747;
}

.login button {
  width: 100%;
  height: 40px;

  color: #e5e7e9;
  background: #283747;
  border: 1px solid #e5e7e9;

  border-radius: 5px;
  padding: 10px 25px;
  margin: 5px 0;
}

.login button:hover {
  color: #e5e7e9;
  background: crimson;
  border: 1px solid #283747;
}</style
>;
