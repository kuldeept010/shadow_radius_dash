<script>
import { h } from "vue";
import Chart from "chart.js/auto";
import "chartjs-adapter-moment";
import { onMounted } from "@vue/runtime-core";

export default {
  setup(props) {
    function showChart() {
      var ctx = document.getElementById("myChart");
      new Chart(ctx, {
        type: "line",
        data: {
          labels: [
            "1/1/2021",
            "1/2/2021",
            "1/3/2021",
            "1/4/2021",
            "1/5/2021",
            "1/6/2021",
            "1/7/2021",
            "1/8/2021",
            "1/9/2021",
            "1/10/2021",
            "1/11/2021",
            "1/12/2021",
            "1/13/2021",
            "1/14/2021",
            "1/15/2021",
            "1/16/2021",
            "1/17/2021",
            "1/18/2021",
            "1/19/2021",
            "1/20/2021",
            "1/21/2021",
            "1/22/2021",
            "1/23/2021",
            "1/24/2021",
            "1/25/2021",
            "1/26/2021",
            "1/27/2021",
            "1/28/2021",
            "1/29/2021",
            "1/30/2021",
            "1/31/2021",
            "2/1/2021",
            "2/2/2021",
            "2/3/2021",
            "2/4/2021",
            "2/5/2021",
            "2/6/2021",
            "2/7/2021",
            "2/8/2021",
            "2/9/2021",
            "2/10/2021",
            "2/11/2021",
            "2/12/2021",
            "2/13/2021",
            "2/14/2021",
            "2/15/2021",
            "2/16/2021",
            "2/17/2021",
            "2/18/2021",
            "2/19/2021",
            "2/20/2021",
            "2/21/2021",
            "2/22/2021",
            "2/23/2021",
            "2/24/2021",
            "2/25/2021",
            "2/26/2021",
            "2/27/2021",
            "2/28/2021",
            "3/1/2021",
            "3/2/2021",
            "3/3/2021",
            "3/4/2021",
            "3/5/2021",
            "3/6/2021",
            "3/7/2021",
            "3/8/2021",
            "3/9/2021",
            "3/10/2021",
            "3/11/2021",
            "3/12/2021",
            "3/13/2021",
            "3/14/2021",
            "3/15/2021",
            "3/16/2021",
            "3/17/2021",
            "3/18/2021",
            "3/19/2021",
            "3/20/2021",
            "3/21/2021",
            "3/22/2021",
            "3/23/2021",
            "3/24/2021",
            "3/25/2021",
            "3/26/2021",
            "3/27/2021",
            "3/28/2021",
            "3/29/2021",
            "3/30/2021",
            "3/31/2021",
            "4/1/2021",
            "4/2/2021",
            "4/3/2021",
            "4/4/2021",
            "4/5/2021",
            "4/6/2021",
            "4/7/2021",
            "4/8/2021",
            "4/9/2021",
            "4/10/2021",
            "4/11/2021",
            "4/12/2021",
            "4/13/2021",
            "4/14/2021",
            "4/15/2021",
            "4/16/2021",
            "4/17/2021",
            "4/18/2021",
            "4/19/2021",
            "4/20/2021",
            "4/21/2021",
            "4/22/2021",
            "4/23/2021",
            "4/24/2021",
            "4/25/2021",
            "4/26/2021",
            "4/27/2021",
            "4/28/2021",
            "4/29/2021",
            "4/30/2021",
            "5/1/2021",
            "5/2/2021",
            "5/3/2021",
            "5/4/2021",
            "5/5/2021",
            "5/6/2021",
          ],
          datasets: [
            {
              label: "Sale",
              data: [27045, 27447, 28114, 28989, 29520, 55700, 55950, 56145, 56900, 57492, 57846, 58004],
              backgroundColor: "rgb(0, 93, 255)",
              borderColor: "rgb(0, 93, 255)",
              borderWidth: 1,
              tension: 0,
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: false,
            },
          },
          fill: false,
          interaction: {
            intersect: false,
          },
          radius: 0,
          hoverRadius: 4,
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              grid: {
                borderColor: 'rgba(112, 112, 112, 42)',
                borderWidth: 0.25,
                drawTicks: false
              },
              beginAtZero: false,
              ticks: {
                padding: 10,
                callback: function (num) {
                  return Math.abs(num) > 999
                    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
                    : Math.sign(num) * Math.abs(num);
                },
              },
            },
            x: {
              ticks: {
                font: {
                  family: "Poppins",
                  size: 13,
                },
                padding: 10,
              },
              type: "time",
              time: {
                unit: "month",
                round: true,
                displayFormats: {
                  month: "MMM",
                },
              },
              grid: {
                borderColor: "transparent",
                color: "white",
                drawTicks: false,
              },
            },
          },
        },
      });
    }

    onMounted(showChart);

    return () =>
      h("canvas", {
        id: "myChart",
        style: {
          width: props.width + "px !important",
          height: props.height + "px",
        },
      });
  },
  props: {
    height: {
      type: Number,
      default: 320,
    },
    width: {
      type: Number,
      default: 320,
    },
  },
};
</script>

<style lang="scss" scoped>
canvas {
  height: 400px !important;
  margin: 10px;
}
</style>
