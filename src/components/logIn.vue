<template>
  <div id="logIN" class="login">
    
    <div class="container_user_login">
      <h2>Bienvenido a PiggyGrow!</h2>
      <br />

      <form v-on:submit.prevent="processLogueo">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="text" v-model="user_in.username" placeholder="Username" class="input1" />
        <br />
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          type="password"
          v-model="user_in.password"
          placeholder="Password" class="input2"/>
        <br />
        <button type="submit" class="btn1">Iniciar Sesión</button>
        <br />

        <label class="label3">O iniciar sesión con </label>
        <br />
        <button type="submit" class="btn2">Google</button>
        <button type="submit" class="btn3" btn-xs>Facebook</button>
        <br />
        <label class="label4"> ¿No tienes una cuenta? Registrarse</label>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "logIn",

  data: function () {
    return {
      user_in: {
        username: "",
        password: "",
      },
    };
  },

  methods: {
    processLogueo: function () {
      var self = this;
      axios
        //.post("http://127.0.0.1:8000/autenticar", self.user_in, {
        .post("https://piggy-grow.herokuapp.com/autenticar", self.user_in, {          
          headers: {},
        })
        .then((result) => {
          alert("Autenticación Exitosa");
          self.$emit("log-in", self.user_in.username);
        })
        .catch((error) => {
          if (error.response.status == "404")
            alert("ERROR 404: Usuario no encontrado.");

          if (error.response.status == "403")
            alert("ERROR 403: Contraseña Erronea.");
        });
    },
  },

};
</script>

<style scoped>
.login {
  margin: 0;
  padding: 50em;
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
  padding: 0em;

  position: fixed;
  /*position: sticky;*/
  width: 45%;
  height: 90%;
  left: 47px;
  top: 41px;

  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  
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
  top: 10%;
}

.login form {
  width: 80%;
}

.login label {
  color: #e5e7e9;
  justify-content: center;
  align-items: center;
  font: bold;
}

.login input {
  height: 40px;
  width: 95%;
  box-sizing: border-box;
  padding: 0px 10px;
  margin: 5px 10px;

  background: rgba(255, 255, 255, 0.5);
  border-radius: 6px;
  border-block-color: black;

}
.login input:focus{
  border:none; 
  color:inherit;
}


.login button:hover {
  color: #e5e7e9;
  background: crimson;
  border: 1px solid #283747;
}

.btn1 {
  position: absolute;
  width: 400px;
  height:45px;
  left: 95px;
  top: 340px;
 
  
  color: #fffcfc;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background: linear-gradient(180deg, #3969fc 0%, #224499 100%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  border-radius: 9px;
}

.btn2 {
  position: absolute;
  width: 240px;
  height: 45px;
  left: 53px;
  top: 440px;

  color: #fffcfc;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  border-radius: 9px;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
}

.btn3 {
  position: absolute;
  width: 240px;
  height: 45px;
  left: 312px;
  top: 440px;

    color: #fffcfc;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  border-radius: 9px;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
}

.label3 {
  position: absolute;
  width: 194px;
  height: 31px;
  left: 196px;
  top: 395px;

  font-style: normal;
  font-size: 16px;
  line-height: 20px;
  text-align: center;

  color: #f4f0f0;

  mix-blend-mode: normal;
}
.label4 {
  position: absolute;
  width: 352px;
  height: 20px;
  left: 117px;
  top: 500px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  text-align: center;

  color: #fff9f9;
}
</style>
