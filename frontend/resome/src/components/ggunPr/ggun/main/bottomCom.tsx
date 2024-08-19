'use client'

import { useState } from "react";
import BarChart from "./com/BarChart";
import { } from 'chart.js/auto';
import LineChart from "./com/LineChart";
import { NasdaqData } from "./data/Nasdaq";

export default function KospiCom() {

    const [nasdaqData, setNasdaqData] = useState({
        labels: NasdaqData.map((data) => data.year),
        datasets: [{
            label: "Nasdaq",
            data: NasdaqData.map((data) => data.result),
            backgroundColor: ["green"],
        }],
        borderColor: "black",
        borderWidth: 2,

    })
    return (
        <div className="flex w-[25vw] h-[30vh] flex-row">
            <LineChart chartData={nasdaqData}></LineChart>
            <LineChart chartData={nasdaqData}></LineChart>
        </div>
    )
}