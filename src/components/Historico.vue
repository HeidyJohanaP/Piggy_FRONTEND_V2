<template>
    <div id="historico">
        <h1 class="titulo-chart">Histórico de movimientos:</h1>
        <bar-chart id="barras" :data="chartData" :options="chartOptions" :key="key"></bar-chart>
        <!--<bar-chart id="barras" :data="chartData" :options="chartOptions"></bar-chart>   --> 
    </div>    
</template>


<script>
import BarChart from "./BarChart.js";
import axios from "axios";
export default {
    name: "Historico",
    components: {
        BarChart
    },
    data() {
        return {
            key: 0,
            username: "",
            movimientos: [],
            chartOptions: {
                hoverBorderWidth: 20
            },
            chartData: {
                hoverBackgroundColor: "red",
                hoverBorderWidth: 10,
                //labels: ["Green", "Red", "Blue"],
                labels: [],
                datasets: [
                    {
                        label: "Movimientos",
                        //backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
                        //data: [20000, 30000, 50000]
                        backgroundColor: [],
                        data: []
                    }
                ]
            }
        };
    },
    methods: {
        obtenerFecha: function(cadenaFecha) {
            var arrayFecha = cadenaFecha.split("-")
            var miAnno = parseInt(arrayFecha[0])
            var miMes = parseInt(arrayFecha[1]) - 1
            var miDia = parseInt(arrayFecha[2])
            var miFecha = new Date(miAnno, miMes, miDia)
            return miFecha
        },
        obtenerCadenaFecha: function(fecha) {
            var miAnno = fecha.getFullYear()
            var miMes = fecha.getMonth() + 1
            var miDia = fecha.getDate()
            var cadenaFecha = miAnno.toString() + "-" + miMes.toString() + "-" + miDia.toString()
            //alert(fecha)
            //alert(cadenaFecha)
            return cadenaFecha
        }
    },


    beforeCreate: function() {
        this.username = this.$route.params.username     
        axios
        .get("https://piggy-grow.herokuapp.com/usuario_mov", { params: { user: this.username }})
        //.get("http://localhost:8000/usuario_mov", { params: { user: this.username }})  
        .then(respuesta => {
            this.movimientos = respuesta.data;
            //alert(this.movimientos[0].fecha)
            var inicio = this.obtenerFecha(this.movimientos[0].fecha)
            //alert(inicio)
            var fin = this.obtenerFecha(this.movimientos[0].fecha)
            //alert(fin)
            for (var n = 1; n < this.movimientos.length; n++) {
                var miFecha = this.obtenerFecha(this.movimientos[n].fecha)
                if (miFecha < inicio) {
                    inicio = miFecha
                }
                if (miFecha > fin) {
                    fin = miFecha
                }                
            } 
            //alert(inicio)
            //alert(fin)
            var intervalo = Math.floor((fin.getTime() - inicio.getTime())/1000/60/60/24) + 1
            //alert(intervalo)
            //alert(this.obtenerCadenaFecha(inicio))
            //alert(this.obtenerCadenaFecha(fin))            
            var fechas = new Array(0)

            fechas.push(inicio.getTime())
            //alert(inicio.getTime())
            //alert(fechas[0])
            this.chartData.labels.push(this.obtenerCadenaFecha(inicio))
            //alert(this.chartData.labels[0])             

            for (var f = 1; f < intervalo; f++) {
                var nuevaFecha = new Date()
                nuevaFecha.setTime(inicio.getTime() + f*60*60*24*1000)
                fechas.push(nuevaFecha)
                //alert(nuevaFecha)
                this.chartData.labels.push(this.obtenerCadenaFecha(nuevaFecha)) 
                //alert(this.chartData.labels[f])              
            }


            var gastos = new Array(intervalo)
            //gastos.length = intervalo
            gastos.fill(0)

            var ingresos = new Array(intervalo)
            //ingresos.lenth = intervalo
            ingresos.fill(0)



            for (var m in this.movimientos) {
                /*if (this.movimientos[m].tipo == "Gasto") {
                    this.chartData.datasets[0].backgroundColor.push('red')                    
                } else {
                    this.chartData.datasets[0].backgroundColor.push('green')                     
                }*/

                var miFecha = this.movimientos[m].fecha
                var miDia = Math.floor((this.obtenerFecha(miFecha).getTime() - inicio.getTime())/1000/60/60/24)
                var miValor = this.movimientos[m].valor
                if (this.movimientos[m].tipo == "Gasto") {
                    miValor = -miValor
                }
                gastos[miDia] += miValor                
                //this.chartData.labels.push(miFecha)
                //this.chartData.datasets[0].data.push(miValor)              
            }
            for (var f = 0; f < intervalo; f++) {
                this.chartData.datasets[0].data.push(gastos[f])
                if (gastos[f] < 0) {
                    this.chartData.datasets[0].backgroundColor.push('red')                    
                } else {
                    this.chartData.datasets[0].backgroundColor.push('green')                     
                }                                
            }
            this.$forceUpdate();
            this.key += 1;
        })
        .catch(error => {
            console.log(error);
            alert("Error en la petición con código" + error.response.status_code);
        });
    }     
}
</script>


<style scoped>
#historico {
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3%;
}
</style>