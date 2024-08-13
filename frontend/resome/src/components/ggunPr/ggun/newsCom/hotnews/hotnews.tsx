'use client'

import { useState } from "react";
import { HotNewsMainCom, HotNewsMainCom2, HotNewsSubCom, HotNewsSubCom2 } from "../data/hotNewsData";
import HotnewsCom from "./hotnewsCom";
import HotnewsCom2 from "./hotnewsCom2";
import OneRowTwoCom from "../oneRowTwoCom";
import HeadTitleCom from "../headTitleCom";



export default function Hotnews(){
    const [affterPage, setAffterPage] = useState(true)

function handleChange(){
    setAffterPage(false)
}

    return(<>
    <div className="mt-20 ml-32">
    <HeadTitleCom title={"지금 사람들이 많이 보는 뉴스"}></HeadTitleCom>
    </div>
    <div className="flex flex-row gap-[3rem] mr-[4.8rem]">
    {HotNewsMainCom.map((item)=><HotnewsCom url={item.url} text={item.text} src={item.back}></HotnewsCom>)}
    </div>
    <div className="flex flex-row gap-[3rem] mr-[4.8rem]">
    {HotNewsMainCom2.map((item)=><HotnewsCom url={item.url} text={item.text} src={item.back}></HotnewsCom>)}
    </div>
    <div className="flex flex-col ml-[5rem]">
   {HotNewsSubCom.map((item)=><OneRowTwoCom src={item.src} src2={item.src2} url={item.url} url2={item.url2} text={item.text} text2={item.text2}></OneRowTwoCom>)}
    <hr className="border-3 border-purple-400" />
    {affterPage===true ? <button onClick={handleChange} className="flex justify-center">더보기</button> : <div className="flex flex-col">
    {HotNewsSubCom2.map((item)=><OneRowTwoCom src={item.src} src2={item.src2} url={item.url} url2={item.url2} text={item.text} text2={item.text2}></OneRowTwoCom>)}
    </div>}
    </div>
    </>)
}