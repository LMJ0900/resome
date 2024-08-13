'use client'

import { useState } from "react";
import LeftBottomBarT from "./bottomBarMo/leftBottomBarT";
import RightBottomBarF from "./bottomBarMo/rightBottomBarF";



export default function BottomBar() {
    const [firstMenu, setFirstMenu] = useState(false)
    const [oftenMenu, setOftenMenu] = useState(true)

    const handleFirst = () => {
        setFirstMenu(true)
        setOftenMenu(false)
    }

    const handleOften = () => {
        setFirstMenu(false)
        setOftenMenu(true)
    }

    return (
        <>
            <div className="flex">
                <button onClick={handleFirst} className="w-[12rem] h-[12rem] bg-[--color-pebble-3] flex justify-center items-center font-bold text-[1.5rem] text-white"> 처음이신가요?
                </button>
                {firstMenu == true ? <LeftBottomBarT /> : null}
                <div className="w-[0px] h-[0px] bg-[--color-pebble-3] border-[--color-pebble-hover] border-r-[0px] border-l-[12rem] border-b-[12rem] border-l-[transparent]">
                </div>
                {oftenMenu == true ? <RightBottomBarF /> : null}
                <button className="w-[20rem] h-[12rem] bg-[--color-pebble-hover] flex justify-center items-center font-bold text-[1.5rem] text-white" onClick={handleOften}> 자주찾는메뉴
                </button>
            </div>
        </>
    )
}