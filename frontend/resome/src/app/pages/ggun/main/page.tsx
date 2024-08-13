import BottomBar from "@/components/ggunPr/ggun/main/bottomBar";
import BottomCom from "@/components/ggunPr/ggun/main/bottomCom";
import CenterCom from "@/components/ggunPr/ggun/main/centerCom";
import Header from "@/components/ggunPr/ggun/main/header";
import KospiCom from "@/components/ggunPr/ggun/main/kospi";
import LeftCom from "@/components/ggunPr/ggun/main/leftCom";
import RightCom from "@/components/ggunPr/ggun/main/rightCom";


export default function Main() {
    return (<>
        <div>
            <Header></Header>
        </div>
        <div className=" flex mt-8">
            <div className="animate-[TransleftTest_1s_ease-in-out_forwards]
        ">
                <LeftCom></LeftCom>
            </div>
            <div className="flex items-center flex-col w-[10vw] h-[60vh]">
                <CenterCom></CenterCom>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-row">
                    <div className="animate-[TransTopTest_1.25s_ease-in-out_forwards] delay-75">
                        <KospiCom></KospiCom>
                    </div>
                    <div className="animate-[TransRightTest_1.5s_ease-in-out_forwards]">
                        <RightCom></RightCom>
                    </div>
                </div>
                <div className="animate-[TransBottomTest_1.75s_ease-in-out_forwards]">
                    <BottomCom></BottomCom>
                </div>
            </div>
        </div>
        <div className="mt-20">
            <BottomBar></BottomBar>
        </div>
    </>)
}