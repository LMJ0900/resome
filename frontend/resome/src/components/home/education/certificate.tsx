import { CartificateData } from "./data/Certificate"
import Image from "next/image";
export function CertificateCom({ src, name, date, text }: any) {
    return (<>
        <div className="mt-[3vw] ml-[3rem] w-[35rem] flex items-center ">
            <Image className="w-[6rem] h-[6rem]" width={500}
                height={500}
                src={src} alt="아이콘">
            </Image>
            <ul className="flex justify-center flex-col gap-[0.4vw] ml-[1rem]">
                <li className="w-[20rem]">취득날짜 : {date}</li>
                <li className="w-[20rem] line-clamp-5 whitespace-normal text-wrap">경력이름 : {name}</li>
                <li className="w-[20rem] line-clamp-5 whitespace-normal text-wrap">설명란 : {text}</li>
            </ul>
        </div>
    </>)
}

export default function Certificate() {
    return (<>
        {CartificateData.map((item) => <CertificateCom key={item.id} date={item.date} text={item.text} name={item.name} src={item.src}></CertificateCom>)}
    </>)
}
