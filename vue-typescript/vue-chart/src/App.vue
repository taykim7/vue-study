<template>
  <div>
    <canvas id="myChart" ref="myChart" width="400" height="400"></canvas>
  </div>
</template>
<script lang="ts">
import Vue, { VueConstructor } from "vue";
import { Chart, registerables } from "chart.js";
import { MyVueRefs } from "./types/index";

Chart.register(...registerables);
// export default (
//   Vue as VueConstructor<Vue & { $refs: { myChart: HTMLCanvasElement } }>
// ).extend({
export default (Vue as MyVueRefs<{ myChart: HTMLCanvasElement }>).extend({
  mounted() {
    // const ctx = (
    //   document.getElementById("myChart") as HTMLCanvasElement
    // ).getContext("2d");
    // ### 전역으로 dom을 접근하기보다 컴포넌트 내에서 특정 dom 정보를 접근할 때는 ref를 사용하는게 좋다.
    // const canvasElement = this.$refs.myChart as HTMLCanvasElement;
    // ### ts에서 ref를 사용하면 ref속성을 타입 추론, 단언 해줘야하는 번거로움이 있음
    const canvasElement = this.$refs.myChart;
    // ### ref 속성 타입 정의로 사라짐 (12 line)
    const ctx = canvasElement.getContext("2d");
    // ### 근데 매번 저렇게 정의를 해야하니 반복적임

    if (ctx) {
      const myChart = new this.$_Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [
            {
              label: "# of Votes",
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  },
});
</script>
