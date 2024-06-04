import Chapter from "@/components/home/chapter";
import Header from "@/components/home/header";
import Sidebar from "@/components/home/sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-row">
        <Sidebar />
        <div className="flex flex-col w-[80vw]">
          <Header />
            <hr className="mt-[5vh] border-2 border-indigo-500/70" />
              <div className="mt-[5vh]">
            <Chapter />
            </div>
        </div>
      </div>
    </>
  );
}
