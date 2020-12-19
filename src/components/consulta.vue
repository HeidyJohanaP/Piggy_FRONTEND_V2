<template>
 <div>
   <h2 id="titulo_tabla">Resultados de consulta:</h2>
  <div id="cont_tabla">
    <table class="tb_movimientos">
      <thead>
        <tr>
          <!--<th>id</th>-->
          <th>Tipo</th>            
          <th>Fecha</th>
          <th>Valor</th>
          <th>Categoría</th>   
          <th>Descripción</th>                     
        </tr>
      </thead>
      <tbody>
        <tr v-for="m in movimiento" v-bind:key="m.id">
          <!--<td>{{ m.id }}</td>-->
          <td>{{ m.tipo }}</td>
          <td>{{ m.fecha }}</td>
          <td>{{ m.valor }}</td>
          <td>{{ m.categoria }}</td>
          <td>{{ m.descripcion }}</td>
        </tr>       
      </tbody>
    </table>
  </div>     
 </div>
</template>

<script>
import axios from "axios";
export default {
  name: "consulta",
  data: function() {
    return {
      movimiento: []
    };
  },
   beforeCreate: function() {
    axios
      .get("https://piggy-grow.herokuapp.com/mov")
      /*.get("http://localhost:8000/mov")  */
      /*.get("https://piggy-backend-v2.herokuapp.com/)*/
      .then(respuesta => {
        this.movimiento = respuesta.data;
      })
      .catch(error => {
        console.log(error);
        alert("Error en la petición con código" + error.response.status);
      });
  }
}
</script>


<style scoped>

#titulo_tabla {
  text-align: center
}
#cont_tabla {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-family: Arial,Helvetica,sans-serif;
}

.tb_movimientos {
  width: 50%;
  border-collapse: collapse;
}

.tb_movimientos th,
.tb_movimientos td {
  margin:auto;
  padding: 1em;
}

.tb_movimientos th {
  color: #fff;
  font-weight: 300;
  background-color: #78909C;
}

.tb_movimientos tr:nth-child(odd) td {
  background-color: #fff;
}

.tb_movimientos tr:nth-child(even) td {
  background-color: #eceff1;
}

.tb_movimientos td:nth-child(3) {
  text-align: right;
}

.tb_movimientos td:nth-child(1),
.tb_movimientos td:nth-child(2),
  .tb_movimientos td:nth-child(4) {
  text-align: center;
}
</style>