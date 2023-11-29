<template>
  <div>
    <canvas ref='lineChart' id="lineChart"></canvas>
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables);

export default {
  mounted() {
    new Chart(this.$refs.lineChart.getContext('2d'), {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}


</script>

<style>

</style>