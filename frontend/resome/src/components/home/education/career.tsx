import { CareerData } from "./data/CareerData";

export function CareerCom({ src ,name, date, text }: any) {

    return (<>
        <div className="mt-[3.5rem] ml-[10rem] w-[35rem] flex items-center ">
            <img className="w-[6rem] h-[6rem]" src={src} alt="아이콘">
            </img>
            <ul className="flex justify-center flex-col gap-[0.4vw] ml-[1rem]">
                <li className="w-[20rem]">날짜 : {date}</li>
                <li className="w-[20rem] line-clamp-5 whitespace-normal text-wrap">경력이름 : {name}</li>
                <li className="w-[20rem] line-clamp-5 whitespace-normal text-wrap">설명란 : {text}</li>
            </ul>
        </div>
    </>);
}

export default function Career() {
    return (<>
        {CareerData.map((item) => <CareerCom date={item.date} text={item.text} name={item.name} src={item.src}></CareerCom>)}
    </>)
}
