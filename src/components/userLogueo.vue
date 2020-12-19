<template>
    <div id="UserLogueo" class="user_logueo">

        <div class="container_user_logueo">
            <h2>Autenticarse</h2>

            <form v-on:submit.prevent="processUserLogueo" >
                <input type="text" v-model="user_in.username" placeholder="Username">
                <br>
                <input type="password" v-model="user_in.password" placeholder="Password">
                <br>
                <button type="submit" v-on:click="InicioSesion">Iniciar Sesion</button>
                <button type="submit">Google</button>
                <button type="submit">Facebook</button>

            </form>
        </div>

    </div>
    
</template>

<script>
import axios from 'axios';
export default {
    name: "UserLogueo",

    data: function(){
        return {
            user_in: {
                username:"",
                password:""
            }
        }
    },

    methods: {
        processUserLogueo: function(){
            var self = this
            axios.post("http://127.0.0.1:8000/usuario/{user}/", self.user_in,  {headers: {}})
                .then((result) => {
                    alert("Autenticación Exitosa");
                    self.$emit('log-in', self.user_in.username)
                })
                .catch((error) => {
                    
                    if (error.response.status == "404")
                        alert("ERROR 404: Usuario no encontrado.");
                    
                    if (error.response.status == "403")
                        alert("ERROR 403: Contraseña Erronea.");  
                });
        }
    }    
}
</script>


<style>
   .user_logueo{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
        background: url(01.FondoLogueo.jpg);
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>