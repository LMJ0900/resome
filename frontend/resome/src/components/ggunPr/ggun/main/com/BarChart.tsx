import {Bar} from 'react-chartjs-2'
import {Chart as ChartJs} from 'chart.js/auto'

function Barchart({chartData}:any){
    return(
        <>
        <Bar data={chartData}/>
        </>
    )
}

export default Barchart;