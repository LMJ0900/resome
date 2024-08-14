'use client'

import { useState } from "react"
import { ggunData } from "../data/ggunData"

export function GgunCom({ src, name, text }: any) {
    return (<>
        <div className="flex justify-center items-center">
            <img className="w-[40rem] h-[30rem]" src={src} alt="로고" />
            <div className="ml-[4rem] w-[20rem]">
                <h2 className="font-semibold text-[2rem]">{name}</h2>
                <h2>설명 : {text}</h2>
            </div>
        </div>
    </>)
}
export function GgunpageCom() {
    return (<>
       <div className="flex justify-center flex-col gap-[2rem]">
                    {ggunData.map((item) => <GgunCom key={item.id} name={item.name} text={item.text} src={item.src}></GgunCom>)}
                 </div>

    </>)
}

export default function Ggun() {

    const [page, setpage] = useState("page")

    function handlePage() {
        setpage("page")
    }
    function handleApi() {
        setpage("Api")
    }
    return (
        <>
            <div className="flex justify-center gap-[2rem]">
                <button onClick={handlePage} className="font-bold text-[2rem]">page</button>
                <button onClick={handleApi} className="font-bold text-[2rem]">api명세서</button>
                <a href="ggun/login" className="font-bold text-[2rem]">ggun으로 이동</a>
            </div>
            {page === "page" ?
                <GgunpageCom/> : page === "Api" ? <img className="w-[800rem] h-[70rem]" src="/images/ggun/api명세서.png" alt="" /> : <h2>확인용</h2>}

        </>
    )
}