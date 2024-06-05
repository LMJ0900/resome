import Chapter from "@/components/home/chapter";
import Chapter1 from "@/components/home/chapter1";
import Header from "@/components/home/header";
import Sidebar from "@/components/home/sidebar";
import Circle from "@/components/home/circle";
import Image from "next/image";
import Circle1 from "@/components/home/circle1";
import Education from "@/components/home/education";
import "@/styles/resome.css"
export default function Home() {
  return (
    <>
    <div className="AniBack" id="AniBack">
    <div className="startAni" id="Ani"></div>
    </div>
      <div className="flex flex-row">
        <Sidebar />
        <div className="flex flex-col w-[80vw]">
          <Header />
            <hr className="mt-[5vh] border-2 border-indigo-500/70" />
              <div className="mt-[5vh]">
              <Chapter1 title="PROFILE" bg=""/>
            </div>
            <div className="flex flex-row ml-[10vw] mt-[4vw] gap-[3vw] ">
            <Circle1 title='My Resome' bg='bg-blue-200' />
            <Circle1 title='My Project' bg='bg-pink-200' />
            <h2 className="text-2xl font-semibold md:text-3xl lg:text-5xl">안녕하세요 <br /><h3 className=" font-light md:text-xl lg:text-3xl">끊임없이 도전하고 노력하는 <br /> 프론트엔드 개발자 이민재입니다. <br />부족한 부분을 찾고 개선하려 노력하고 있습니다 <br />잘 부탁드립니다!</h3> </h2>
            </div>
            <div className="mt-[5vh]">
            <Chapter1 title="Career/Certificate" bg=""/>
            </div>
            <Education />
        </div>
        
      </div>
    </>
  );
}
