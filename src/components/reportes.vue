<template>
  <div id="reportes">
    <Torta />  
    <br>    
    <!--<Historico />-->
  </div>
</template>

<script>
import Historico from "./Historico"
import Torta from "./Torta"
import axios from "axios";
export default {
    name: "reportes",
    components: {
        Historico,
        Torta
    }
};
</script>


<style scoped>
#reportes {
    /*display: flex;*/
    width: 100%;
    /*margin-top: 2%;*/
}

</style>