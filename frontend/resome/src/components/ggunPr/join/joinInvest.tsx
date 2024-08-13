'use client'

import { useState } from "react"
import { colortype } from "./types/join"
import { ColorText } from "./data/join"

function ColorType({textColor,type,text}:colortype){
    return(
        <> <div className="w-[23rem] h-[8rem] flex justify-center items-center flex-col">
        <h2 className={`font-semibold ${textColor}`}>{type}
        </h2>
        <h3 className="mt-2 text-white">{text}</h3>
    </div>
    </>
    )
}

export default function JoinInvest() {

    const [invest1, setInvest1] = useState(false)
    const [invest2, setInvest2] = useState(false)
    const [invest3, setInvest3] = useState(false)
    const [invest4, setInvest4] = useState(false)
    const [invest5, setInvest5] = useState(false)

    const handleInvest1 = () => {
        setInvest1(true)
        setInvest2(false)
        setInvest3(false)
        setInvest4(false)
    }
    const handleInvest2 = () => {
        setInvest1(false)
        setInvest2(true)
        setInvest3(false)
        setInvest4(false)
    }
    const handleInvest3 = () => {
        setInvest1(false)
        setInvest2(false)
        setInvest3(true)
        setInvest4(false)
    }
    const handleInvest4 = () => {
        setInvest1(false)
        setInvest2(false)
        setInvest3(false)
        setInvest4(true)
    }
    const handleInvest5 = () => {
        setInvest1(false)
        setInvest2(false)
        setInvest3(false)
        setInvest4(false)
        setInvest5(true)
    }

    return (
        <>
            <div className="flex justify-center items-center gap-[2rem] flex-row">
                <button type="button" className="w-[2rem] h-[2rem] bg-red-300" onClick={handleInvest1}>
                </button>
                <button type="button" className="w-[2rem] h-[2rem] bg-purple-300" onClick={handleInvest2}>
                </button>
                <button type="button" className="w-[2rem] h-[2rem] bg-blue-300" onClick={handleInvest3}>
                </button>
                <button type="button" className="w-[2rem] h-[2rem] bg-amber-200" onClick={handleInvest4}>
                </button>
                <button type="button" className="w-[2rem] h-[2rem] bg-green-300" onClick={handleInvest5}>
                </button>
            </div>
            <div className="flex justify-center items-center flex-col">
                {
                    invest1 == true ?
                        <ColorType type={ColorText[0].type} text={ColorText[0].text} textColor={ColorText[0].textColor}></ColorType> : (invest2 == true) ? <ColorType type={ColorText[1].type} text={ColorText[1].text} textColor={ColorText[1].textColor}/> :
                            (invest3 == true) ? <ColorType type={ColorText[2].type} text={ColorText[2].text} textColor={ColorText[2].textColor}/> : (invest4 == true) ? <ColorType type={ColorText[3].type} text={ColorText[3].text} textColor={ColorText[3].textColor}/> : (invest5 == true) ? <ColorType type={ColorText[4].type} text={ColorText[4].text} textColor={ColorText[4].textColor}/> : <h2>당신의 투자성향 컬러를 선택해주세요</h2>
                }
            </div>


        </>
    )
}