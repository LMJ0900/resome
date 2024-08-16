import { useState } from "react"
import Image from "next/image";
export function HandleICON({ num, wrap }: any) {


    return (<>
        <button onClick={wrap} className={`w-[2rem] h-[2rem] rounded-[100%] bg-white focus:bg-red-100 hover:bg-gray-100 flex justify-center items-center`}>
            <h2 className="text-black">{num}</h2>
        </button>
    </>)
}

export default function MajorHandle({ handleNext, onwrap3, onwrap2, onwrap1 }: any) {

    const handleClick = () => {
        handleNext()
    }




    return (<>
        <div className="flex flex-row">
            <HandleICON wrap={onwrap1} num={1} />
            <HandleICON wrap={onwrap2} num={2} />
            <HandleICON wrap={onwrap3} num={3} />
            <HandleICON num={<Image width={100}
                height={100} src="/images/ggunPage/버튼왼쪽.png" alt=""></Image>}></HandleICON>
            <HandleICON num={<Image width={100}
                                    height={100} src="/images/ggunPage/버튼오른쪽.png" alt=""></Image>}></HandleICON>
        </div>
    </>)
}

function handleNext() {
    throw new Error("Function not implemented.")
}
