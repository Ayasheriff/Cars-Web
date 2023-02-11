import React from "react";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
    
      responsive: true,
      plugins: {
        legend: {
          position: 'none',
        },
        title: {
          display: false,
          text: 'Chart.js Line Chart',
        },
        // scales: {
        //     x: {
        //       display: true,
        //       title: {
        //         display: true,
        //       },
        //     },
        //     y: {
        //       display: false,
        //     },
    },
};

function LineChart (){
    const data = {
      //  type:"monotone",
        labels: ['7 am', '9 am', '11 am', '1 pm', '3 pm', '5 pm', '7 pm', '9 pm'],
        datasets: [
            {
                label:'',
                data: [3,2,5,1,9,5,10,2],
                fill: true,
                borderColor: '#FF764C',
                 backgroundColor: '#ff764c59',
                 borderWidth: 1,
                
            }
        ]
    }
    return <Line data={data}  options={options} style={{ height: "200px", width: "200px" }}  />
}

export default LineChart;








// import React from 'react';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Filler,
//   Legend,
// } from 'chart.js';
// import { Line } from 'react-chartjs-2';


// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Filler,
//   Legend
// );

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top',
//     },
//     title: {
//       display: true,
//       text: 'Chart.js Line Chart',
//     },
//   },
// };

// const labels = ['7 am', '9 am', '11 am', '1 pm', '3 pm', '5 pm', '7 pm', '9pm'];

// export const data = {
//   labels,
//   datasets: [
//     {
//       fill: true,
//       label: 'Dataset 2',
//     //   data: labels.map(() =>  .datatype.number({ min: 0, max: 1000 })),
//       borderColor: 'rgb(53, 162, 235)',
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };

//  function LineChart() {
//   return <Line options={options} data={data} />;
// }

// export default LineChart ;
