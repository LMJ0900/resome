import { useState } from "react"

export function HandleICON({ num }: any) {


    return (<>
        <button className={`w-[2rem] h-[2rem] rounded-[100%] bg-white hover:bg-gray-100 flex justify-center items-center`}>
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
            <HandleICON num={1}/>
            <button onClick={onwrap2} className="w-[2rem] h-[2rem] rounded-[100%] bg-white hover:bg-gray-100 flex justify-center items-center">
                <h2 className="text-black">2</h2>
            </button>
            <button onClick={onwrap3} className="w-[2rem] h-[2rem] rounded-[100%] bg-white hover:bg-gray-100 flex justify-center items-center">
                <h2 className="text-black">3</h2>
            </button>
            <HandleICON num={<img src="/images/ggunPage/버튼왼쪽.png" alt=""></img>}></HandleICON>
            <HandleICON num={<img src="/images/ggunPage/버튼오른쪽.png" alt=""></img>}></HandleICON>
        </div>
    </>)
}

function handleNext() {
    throw new Error("Function not implemented.")
}
