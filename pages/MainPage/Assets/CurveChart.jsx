import React from "react";
import { Line, Bar } from 'react-chartjs-2';



function CurveChart () {
    const data = {
        labels: ['12/9', '12/9', '12/9', '12/9', '12/9', '12/9', '12/9', '12/9', '12/9', '12/9', '12/9', '12/9'],
        datasets:[
            {
                label:'',
                data:[2,5,8,4,6,1,7,2,6,8,3,7],
                fill:true,
                backgroundColor:'#a062f76f',
                borderWidth:1,
                borderColor:'#A162F7',
                animate : false
            },
          
        ]
    }
    return <div>
        < Line data={data} />
       
    </div>
}

export default CurveChart;