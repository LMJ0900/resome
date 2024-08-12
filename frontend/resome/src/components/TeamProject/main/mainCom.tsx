import { protfiloData } from "../data/protfiloData"

export function MainCom({ src, name, text, stack }: any) {
    return (<>
            <div className="flex justify-center items-center">
                <img className="w-[15rem] h-[15rem]" src={src} alt="로고" />
                <div className="w-[20rem]">
                    <h2 className="font-semibold text-[2rem]">프로젝트명 : {name}</h2>
                    <h2>배경 : {text}</h2>
                    <h2>사용 기술스택 : {stack}</h2>
                </div>
            </div>
    </>)
}

export default function Main() {
    return (
        <>
            <div className="flex justify-center flex-row gap-[2rem]">
            {protfiloData.map((item) => <MainCom name={item.name} text={item.text} stack={item.stack} src={item.src}></MainCom>)}
            </div>
        </>
    )
}