<template>
  <div id="Movimiento">
    <h2>NUEVO MOVIMIENTO</h2><br /><br />
    
    <!--<div>
      <label>id: </label>
      <input v-model="id" id="id" type="number" /><br /><br /> 
    </div>-->

    <label>Tipo: </label>
    <select v-model="tipo" id="tipo" name="TipoMov">
      <option selected value="">Elige una opción</option>
      <option value="Ingreso">Ingreso</option>
      <option value="Gasto">Gasto</option></select>
    <br /><br />
    <label>Valor: </label>
    <input v-model="valor" id="valor" type="number" /><br /><br />
    <label>Categoria: </label>
    <input v-model="categoria" id="categoria" type="text" /><br /><br />
    <label>Descripción: </label>
    <input v-model="descripcion" id="descripcion" type="text" style="height: 50px"/><br /><br />
    <label>Fecha: </label>
    <input v-model="fecha" id="fecha" type="date" /><br /><br />
    <button v-on:click="NewMov">Agregar</button>
  </div>

</template>

<script>
import axios from "axios";
export default {
    name: "crear_movimiento",
    data: function() {
        return {

            id: 10,
            tipo: "",
            fecha: "",
            valor: "",
            categoria: "",
            descripcion: "",            
        }
    },

    methods: {
        NewMov: function(){
            var datosJSON = {
                id: 1,
                tipo: this.tipo,
                fecha: this.fecha,
                valor: this.valor,
                categoria: this.categoria,
                descripcion: this.descripcion
                
            };
        
            axios
                //.post("https://piggy-grow.herokuapp.com/mov/nuevo", datosJSON)
                .post("http://localhost:8000/mov/nuevo", datosJSON) 
                .then(respuesta => {
                    alert(respuesta.data.message);
                })
                .catch(error => {
                    alert(error.response.data.detail);
                    //alert("Error en el servidor.");
                });


        //alert("Se creó un nuevo movimiento.")
        }
            
    },

/*
created: function() {
    this.datoRecibido = this.$route.params.dato;
    }
    */

};

</script>

<style>
#Movimiento {
  height: 75vh;
  margin: 0%;
  padding: 0%;
  background: #fdfefe;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
}

#Movimiento button {
  color: black;
  background: beige;
  border: 5px solid #e9e5e9;
  border-radius: 80px;
  padding: 10px 20px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
}

#Movimiento button:hover {
  color: #283747;
  background: #e5e7e9;
  border: 1px solid #e5e7e9;
}

input { 
  height: 20px;
  text-align: center;
  margin-left: 10px;
}

</style>
