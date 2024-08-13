import NewImageCom from "../newsImageCom";

export default function HotnewsCom({ text, src, url }: any) {
    return (<>
        <a href={url} className="flex flex-col w-[16rem] h-[15rem]">
            <div className="overflow-hidden w-[16rem] h-[10rem]rounded-[16px]">
            <NewImageCom width="w-[16rem]" high="h-[10rem]" back={src}></NewImageCom>
            </div>
            <h2 className="w-[16rem] h-[5rem]">{text}</h2>
        </a>
    </>)
}