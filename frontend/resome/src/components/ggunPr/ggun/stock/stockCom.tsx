'use client'

import { useState } from "react";
import CategoriCom from "./categoriCom";
import MyStock from "./myStock/myStock";
import DomesticStock from "./Domestic/domesticStock";
import OverseaStock from "./OverSea/overseaStock";

export default function StockCom() {

    const [page,setpage] = useState("domestic")

    function handleDo(){
        setpage("domestic")
    }
    function handleOverSea(){
        setpage("overSea")
    }
    function handleMyStock(){
        setpage("myStock")
    }

    return (<>
        <div className="mt-24 flex justify-center items-center flex-col">
            <h2 className="text-[1.5rem] font-bold mr-[60rem]">주식 골라보기</h2>
            <div className="mr-[57rem] mt-20">
                <button onClick={handleDo} className="w-[4rem] focus:border-b-2 border-black">국내</button>
                <button onClick={handleOverSea} className="w-[4rem] focus:border-b-2 border-black">해외</button>
                <button onClick={handleMyStock} className="w-[4.5rem] focus:border-b-2 border-black">관심주식</button>
            </div>
            <hr className="mt-4 w-[70rem] border-2 " />
           {page==="domestic" ? <DomesticStock></DomesticStock> : page==="overSea" ? <OverseaStock></OverseaStock> : page==="myStock" ? <MyStock></MyStock> : <DomesticStock></DomesticStock>}
        </div>
    </>)
}