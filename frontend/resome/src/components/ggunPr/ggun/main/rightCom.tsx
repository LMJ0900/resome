'use client'

import { useState } from "react";
import BarChart from "./com/BarChart";
import { } from 'chart.js/auto';
import LineChart from "./com/LineChart";
import { KosdaqData } from "./data/Kosdaq";


export default function KospiCom() {

    const [kosdaqData, setKosdaqData] = useState({
        labels: KosdaqData.map((data) => data.year),
        datasets: [{
            label: "KOSDAQ",
            data: KosdaqData.map((data) => data.result),
            backgroundColor: ["blue"],
        }],
        borderColor: "black",
        borderWidth: 2,

    })
    return (
        <div className=" w-[25vw] h-[30vh]">
            <LineChart chartData={kosdaqData}></LineChart>
        </div>
    )
}