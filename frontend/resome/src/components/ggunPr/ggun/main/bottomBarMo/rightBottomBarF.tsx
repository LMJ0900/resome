

import { rightBotTitle } from "../data/main"
import { rightBot } from "../types/main"



function RightbottomCom(props: rightBot) {
    return (
        <>
            <a href="#" className="w-[15rem] h-[12rem] bg-[--color-pebble-hover] flex justify-center items-center font-bold text-[1.5rem] text-white"> {props.title}
            </a>
        </>
    )
}

export default function RightBottomBarF() {
    return (
        <>
                {rightBotTitle.map((rightBottomCom) => <RightbottomCom key={rightBottomCom.title} title={rightBottomCom.title}></RightbottomCom>)}
        </>
    )
}