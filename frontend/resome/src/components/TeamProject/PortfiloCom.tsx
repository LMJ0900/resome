'use client'

import { useState } from "react";
import MainCom from "./main/mainCom";
import GgunCom from "./ggun/ggunCom";

export default function PortfolioCom() {
    const [page, setpage] = useState("main")

    function handleGgun() {
        setpage("ggun")
    }
    return (<>
        <div className="flex justify-center gap-[3rem]">
            <button onClick={handleGgun} className="w-[10rem] focus:border-b-2 border-black text-[5rem]">ggun</button>
            <button className="w-[10rem] focus:border-b-2 border-black text-[5rem]">모름</button>
            <button className="w-[10rem] focus:border-b-2 border-black text-[5rem]">모름</button>
        </div>
        {page==='main' ? <MainCom /> : page=='ggun' ? <GgunCom /> : <MainCom />  }
    </>)
}