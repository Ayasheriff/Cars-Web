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

import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options= {
    aspectRatio: 1,
    maintainAspectRatio: false,
    responsive:true,
    Plugins:{
        legend:{
            display:false,
            position:'top',
        },
        title:{
            display:false,
            text:'Chart.js Bar Chart',
        },
    },
    scales:{
        x:{
            display:true,
            title:{
                display:true,
            },
            
        },
        y:{
            display:true,
            title:{
                display:true,
            },
        },
    },
};

const labels = ['Mon', 'Tue','Wed', 'Thu','Fri', 'Sat', 'sun'];

export const data ={
    labels,
    datasets:[
     {
        label:'',
        data:[10,7,17,22,17,15,19],
        backgroundColor:['#ff7e8771','#ff7e8771','#ff7e8771','#FF6370','#ff7e8771','#ff7e8771','#ff7e8771'],
        borderWidth:1,
        borderRadius:25,
        
     },
    ],
};

function SellChart () {
    return <Bar data={data} options={options} style={{ height: "350px", width: "200px" }} />;
};
export default SellChart;