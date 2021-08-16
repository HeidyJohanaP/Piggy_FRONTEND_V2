<template>
    <div id="torta">
        <div id="torta-gastos">
            <h1 class="titulo-chart">Resumen de Ingresos:</h1>
            <pie-chart class="dona" :data="chartDataIngresos" :options="chartOptions" :key="key"></pie-chart>
        </div>
        <div id="torta-ingresos">
            <h1 class="titulo-chart">Resumen de Gastos:</h1>            
            <pie-chart class="dona" :data="chartDataGastos" :options="chartOptions" :key="key"></pie-chart>    
            <!--<pie-chart id="dona" :data="chartData" :options="chartOptions"></pie-chart> --> 
        </div>
  </div>
</template>


<script>
import PieChart from "./PieChart.js";
import axios from "axios";
export default {
    name: "Torta",
    components: {
        PieChart,
    },
    data() {
        return {
            key: 0,
            username: "",
            movimientos: [],
            ingresos:[],
            gastos: [],
            chartOptions: {
                hoverBorderWidth: 20
            },
            chartDataIngresos: {
                hoverBackgroundColor: "red",
                hoverBorderWidth: 10,
                //labels: ["Green", "Red", "Blue"],
                labels: [],
                datasets: [
                    {
                        label: "Data One",
                        //backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
                        //data: [20000, 30000, 50000]
                        backgroundColor: [],
                        data: []
                    }
                ]
            },
            chartDataGastos: {
                hoverBackgroundColor: "red",
                hoverBorderWidth: 10,
                //labels: ["Green", "Red", "Blue"],
                labels: [],
                datasets: [
                    {
                        label: "Data One",
                        //backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
                        //data: [20000, 30000, 50000]
                        backgroundColor: [],
                        data: []
                    }
                ]
            },            
        };
    },
    beforeCreate: function() {
        this.username = this.$route.params.username     
        axios
        .get("https://piggy-grow.herokuapp.com/usuario_mov", { params: { user: this.username }})
        //.get("http://localhost:8000/usuario_mov", { params: { user: this.username }})  
        .then(respuesta => {
            this.movimientos = respuesta.data;
            var cats = []
            for (var m in this.movimientos) {
                if (this.movimientos[m].tipo == "Gasto") {
                    var cat = this.movimientos[m].categoria
                    this.chartDataGastos.labels.push(cat)
                    var val = this.movimientos[m].valor                
                    this.chartDataGastos.datasets[0].data.push(val)
                    var r = Math.floor(Math.random()*255)
                    var g = Math.floor(Math.random()*255) 
                    var b = Math.floor(Math.random()*255) 
                    var color = 'rgb(' + r + ',' + g + ',' + b + ')'                              
                    this.chartDataGastos.datasets[0].backgroundColor.push(color)  
                } else {
                    var cat = this.movimientos[m].categoria
                    this.chartDataIngresos.labels.push(cat)
                    var val = this.movimientos[m].valor                
                    this.chartDataIngresos.datasets[0].data.push(val)
                    var r = Math.floor(Math.random()*255)
                    var g = Math.floor(Math.random()*255) 
                    var b = Math.floor(Math.random()*255) 
                    var color = 'rgb(' + r + ',' + g + ',' + b + ')'                              
                    this.chartDataIngresos.datasets[0].backgroundColor.push(color)                      
                }
              
            }
            /*this.$forceUpdate();*/
            this.key += 1;
        })
        .catch(error => {
            console.log(error);
            alert("Error en la petición con código" + error.response.status_code);
        });
    }    
};
</script>


<style scoped>
#torta {
    display: flex;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3%;
}
#torta-ingresos, #torta-gastos {
    width: 40%; 
    margin-left: 5%;
    margin-right: 5%;    
    /*margin-top: 5%; */   
}
.titulo-chart {
    /*background-color: yellow;*/
    /*color: black;*/
    /*font-size: 25px;*/
    /*width: 100%;*/
}
.dona {
    width: 100%;
}

</style>