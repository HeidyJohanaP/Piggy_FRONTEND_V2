<template>
  <div id="reportes">
    <pie-chart id="dona" :data="chartData" :options="chartOptions"></pie-chart>
  </div>
</template>

<script>
    import PieChart from "./PieChart.js";
    export default {
    name: "reportes",
    components: {
        PieChart
    },
    data() {
        return {
        chartOptions: {
            hoverBorderWidth: 20
        },
        chartData: {
            hoverBackgroundColor: "red",
            hoverBorderWidth: 10,
            labels: ["Green", "Red", "Blue"],
            datasets: [
            {
                label: "Data One",
                backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
                data: [1, 10, 5]
            }
            ]
        }
        };
    }
    };
</script>


<style scoped>
    #reportes {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;        
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    #dona {
        width: 40%;      
    }
</style>