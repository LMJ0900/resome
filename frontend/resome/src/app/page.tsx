import Chapter from "@/components/home/chapter";
import Chapter1 from "@/components/home/chapter1";
import Header from "@/components/home/header";
import Sidebar from "@/components/home/sidebar";
import Circle from "@/components/home/circle";
import Image from "next/image";
import Circle1 from "@/components/home/circle1";
import "@/styles/resome.css"
import Propile from "@/components/home/propile/propile";
import Career from "@/components/home/education/career";
import Certificate from "@/components/home/education/certificate";
export default function Home() {
  return (
    <>
      <div className=" flex flex-row">
        <Sidebar />
          <div className="flex flex-col ml-[22rem] w-[90rem]">
            <Header />
            <hr className="mt-[3rem] w-[96.95rem] border-2 border-indigo-500/70" />
            <Propile />
            <div className="mt-[5vh]">
              <Chapter1 title="Career/Certificate" bg="" />
            </div>
            <div className="flex flex-row">
              <div className="flex flex-col">
                <Career />
              </div>
              <hr className="mt-[3rem] border-2 border-black h-full" />
              <div className="flex flex-col">
                <Certificate />
              </div>
            </div>
          </div>

      </div>
    </>
  );
}
