// import React from "react";
// import { Bar } from 'react-chartjs-2';
// // import { chart as chartjs} from 'chart.js/auto';


// function BarChart ({chartData}){
//     return <Bar data={chartData} />;
// }

// export default BarChart;

































import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  aspectRatio: 1,
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: "top",
    },
    title: {
      display: false,
      text: "Chart.js Bar Chart",
    },
  },
  scales: {
    x: {
      display: true,
      title: {
        display: true,
      },
    },
    y: {
      display: false,
    },
  },
};

const labels = ["1 Pm", "2 Pm", "3 Pm", "4 Pm", "5 Pm", "6 Pm", "7 Pm"];

export const data = {
  labels,
  datasets: [
    {
      label: "",
      data: [500, 700, 1000, 700, 300, 800, 400],
      backgroundColor: ['#F4F5F9', '#F4F5F9',"#2884FF", '#F4F5F9','#F4F5F9', '#F4F5F9', '#F4F5F9'],
      
    },
  ],
};

function BarChart() {
  return <Bar options={options} data={data} style={{ height: "200px", width: "200px" }}/>;
}

export default BarChart;