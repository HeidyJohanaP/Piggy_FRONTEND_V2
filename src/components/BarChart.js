import { Bar, mixins } from "vue-chartjs";
export default {
  extends: Bar,
  props: ["data", "options", "key"],
  //props: ["data", "options"],  
  mounted() {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.data, {
        borderWidth: "10px",
        hoverBackgroundColor: "red",
        hoverBorderWidth: "10px",
        borderColor: "black",
        /*barPercentage: 1.0,
        categoryPercentage: 1.0,*/
        scales: {
            xAxes: [{
                type: 'time',
                time: {
                    unit: 'day'
                },
                gridLines: {
                    offsetGridLines: true
                }
            }],
            yAxes: [{
                /*gridLines: {
                    offsetGridLines: true
                }*/
            }]
        }
    });
  }
};