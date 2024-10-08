'use client'

import { useState } from "react"
import Image from "next/image";
export default function LeftCom() {
    const img1 = "/images/1번패널.png"
    const img2 = "/images/1번패널.png"
    const img3 = "https://static.cdn.soomgo.com/upload/banner/a4a7576a-4865-41af-9b52-1e60cb7c726b.png?w=970&webp=1"
    const img4 = "https://static.cdn.soomgo.com/upload/banner/a598d5c9-6e6a-4a2e-b4dc-d781eef10160.png?w=970&webp=1"
    const img5 = "https://static.cdn.soomgo.com/upload/banner/32fdb587-7562-4c41-8d43-1a87721b5120.png?w=970&webp=1"

    const imglist = [img1, img2, img3, img4, img5]

    const [isNext, setIsNext] = useState(imglist[1])
    const [count, setcount] = useState(1)

    const handleNext = () => {
        if (isNext == imglist[1]) {
            setIsNext(imglist[2])
            setcount(2)
        } else if (isNext == imglist[2]) {
            setIsNext(imglist[3])
            setcount(3)
        } else if (isNext == imglist[3]) {
            setIsNext(imglist[4])
            setcount(4)
        } else if (isNext == imglist[4]) {
            setIsNext(imglist[5])
            setcount(5)
        } else {
            setIsNext(imglist[1])
            setcount(1)
        }
    }

    const handleBack = () => {
        if (isNext == imglist[5]) {
            setIsNext(imglist[4])
            setcount(4)
        } else if (isNext == imglist[4]) {
            setIsNext(imglist[3])
            setcount(3)
        } else if (isNext == imglist[3]) {
            setIsNext(imglist[2])
            setcount(2)
        } else if (isNext == imglist[2]) {
            setIsNext(imglist[1])
            setcount(1)
        } else {
            setIsNext(imglist[5])
            setcount(5)
        }
    }

    return (
        <div className=" w-[40vw] h-[60vh]">
            <div className="w-[40vw] h-[40vh]">

                <div className="">
                    <Image className="w-[40vw] h-[40vh] relative" width={500}
                        height={500} src={isNext} alt="배너로고" />
                    <div className="">
                        <button className="absolute top-[21rem] right-[0.5rem] w-[2rem]" onClick={handleNext}>
                            <Image width={100}
                                height={100} src="/images/ggunPage/버튼오른쪽.png" alt="버튼" />
                        </button>
                        <button className="absolute top-[21rem] right-[4.9rem] w-[2rem]" onClick={handleBack}>
                            <Image width={100}
                                height={100} src="/images/ggunPage/버튼왼쪽.png" alt="버튼" />
                        </button>
                        <span className="bg-green-600 rounded-lg absolute top-[21.3rem] right-[3rem]">{count}/5</span>
                    </div>
                </div>
                <div className="w-[40vw] h-[20vh] flex justify-center items-center">
                    <input type="text" className=" relative w-[30vw] h-[8vh] border-2 border-[--color-pebble-hover]" placeholder="무엇을 도와드릴까요?">
                    </input>
                    <button className="w-[3rem] h-[3rem] absolute right-[6vw]">
                        <Image width={500}
                            height={500} src="/images/ggunPage/Mainsearch.png" alt="검색" />
                    </button>
                </div>

            </div>
        </div>
    )
}