<template>
  <div>
    <canvas ref='barChart' id="barChart" width="400" height="400"></canvas>
  </div>
</template>

<script>
// import { Chart, registerables } from 'chart.js'
// Chart.register(...registerables);
// → this.$_Chart 로 사용가능

export default {
  mounted() {
    new this.$_Chart(this.$refs.barChart, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
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