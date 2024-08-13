'use client'

import 'animate.css';
import { useEffect, useState } from 'react';

export default function StartAni() {

    const [mainText,setMainText] = useState(false)

    
    useEffect(()=>{
        let timer = setTimeout(()=>{setMainText(true)},3000)});

    return (
        <div className="flex flex-row relative top-[35.6rem]">
            <div className="opacity-50">
                <div className="w-[7rem] h-[30rem] animate-[aniUp_3s_ease-in_forwards,fadeIn_0.5s_ease-in_forwards] origin-bottom  bg-red-500">
                </div>
                <div className="w-[7rem] h-[30rem] animate-[aniDown_3s_ease-in_100ms_forwards] origin-bottom absolute left-[7rem] bottom-[0rem]  bg-blue-500"></div>
                <div className="w-[7rem] h-[30rem] animate-[aniUp2_3s_ease-in_200ms_forwards] origin-bottom absolute left-[14rem] bottom-[0rem]  bg-red-500"></div>
                <div className="w-[7rem] h-[30rem] animate-[aniDown2_3s_ease-in_300ms_forwards] origin-bottom absolute left-[21rem] bottom-[0rem] bg-blue-500"></div>
                <div className="w-[7rem] h-[30rem] animate-[aniUp_3s_ease-in_400ms_forwards] origin-bottom absolute left-[28rem] bottom-[0rem]  bg-red-500"></div>
                <div className="w-[7rem] h-[30rem] animate-[aniDown_3s_ease-in_500ms_forwards] origin-bottom absolute left-[35rem] bottom-[0rem]  bg-blue-500"></div>
                <div className="w-[7rem] h-[30rem] animate-[aniUp_3s_ease-in_600ms_forwards] origin-bottom absolute left-[42rem] bottom-[0rem]  bg-red-500"></div>
                <div className="w-[7rem] h-[30rem] animate-[aniDown3_3s_ease-in_700ms_forwards] origin-bottom absolute left-[49rem] bottom-[0rem]  bg-blue-500"></div>
                <div className="w-[7rem] h-[30rem] animate-[aniUp2_3s_ease-in_800ms_forwards] origin-bottom absolute left-[56rem] bottom-[0rem]  bg-red-500"></div>
                <div className="w-[7rem] h-[30rem] animate-[aniDown4_3s_ease-in_900ms_forwards] origin-bottom absolute left-[63rem] bottom-[0rem] bg-blue-500"></div>
                <div className="w-[7rem] h-[30rem] animate-[aniUp3_3s_ease-in_1000ms_forwards] origin-bottom absolute left-[70rem] bottom-[0rem] bg-red-500"></div>
                <div className="w-[7rem] h-[30rem] animate-[aniDown_3s_ease-in_1100ms_forwards] origin-bottom absolute left-[77rem] bottom-[0rem] bg-blue-500"></div>
                <div className="w-[7rem] h-[30rem] animate-[aniUp_3s_ease-in_1200ms_forwards] origin-bottom absolute left-[84rem] bottom-[0rem]  bg-red-500"></div>
                <div className="w-[7rem] h-[30rem] animate-[aniDown2_3s_ease-in_1300ms_forwards] origin-bottom absolute left-[91rem] bottom-[0rem]  bg-blue-500"></div>
                <div className="w-[7rem] h-[30rem] animate-[aniUp_3s_ease-in_1400ms_forwards] origin-bottom absolute left-[98rem] bottom-[0rem]  bg-red-500"></div>
                <div className="w-[7rem] h-[30rem] animate-[aniDown_3s_ease-in_1500ms_forwards] origin-bottom absolute left-[105rem] bottom-[0rem]  bg-blue-500"></div>
                <div className="w-[7rem] h-[30rem] animate-[aniUp3_3s_ease-in_1600ms_forwards] origin-bottom absolute left-[112rem] bottom-[0rem]  bg-red-500"></div>
                <div className="w-[7rem] h-[30rem] animate-[aniDown3_3s_ease-in_1700ms_forwards] origin-bottom absolute left-[119rem] bottom-[0rem]  bg-blue-500"></div>
                <div className="w-[7rem] h-[30rem] animate-[aniUp2_3s_ease-in_1800ms_forwards] origin-bottom absolute left-[126rem] bottom-[0rem]  bg-red-500"></div>
            </div>
            {mainText===true ? <div className="opacity-100 z-10">
                <div className="text-[10rem] opacity-100 text-black relative bottom-[20rem] left-[42rem] animate__animated animate__fadeIn font-[ggunFont3]">ggun</div>
                <div className='text-[3rem] text-black absolute top-0 left-[43rem] animate__animated animate__backInLeft font-[ggunFont3]'>AI 투자매니저와 함께하세요</div>
            </div> : null}
            
        </div>

    )
}