import Link from "next/link";

export default function Header() {



    return (<>
        <div className="flex justify-start items-center ml-[5rem]  w-full h-[5rem] font-bold text-[4rem] mt-[2rem]">
            <a href="" className="">Lee,Minjae <br /> <h2 className="text-[2rem] pl-[0.9vw]"> front-end developer
            </h2> </a>
            <ul className="ml-[5vw] text-[1.5vw] font-semibold flex gap-[3vw]">
                <li><Link href="/pages/TeamProject">Team Project</Link></li>
                <li><Link href="/pages/PersonalProject">Personal Project</Link></li>
                <li><Link href="/pages/Resome">Resome</Link></li>
            </ul>
        </div>
    </>)
}