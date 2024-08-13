'use client'

import { useState } from "react";
import BarChart from "./com/BarChart";
import { KospiData } from "./data/kospi";
import { } from 'chart.js/auto';
import LineChart from "./com/LineChart";

export default function KospiCom() {

    const [kospiData, setKospiData] = useState({
        labels: KospiData.map((data) => data.year),
        datasets: [{
            label: "KOSPI",
            data: KospiData.map((data) => data.result),
            backgroundColor: ["green"],
        }],
        borderColor: "black",
        borderWidth: 2,

    })
    return (
        <div className=" w-[25vw] h-[30vh]">
            <LineChart chartData={kospiData}></LineChart>
        </div>
    )
}