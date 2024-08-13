import NewImageCom from "../newsImageCom";

export default function HotnewsCom2({ text, src, url }: any) {
    return (<>
        <a href={url} className="flex flex-row w-[40rem] h-[10rem]">
            <div className="overflow-hidden w-[8rem] h-[5rem] rounded-[16px]">
                <NewImageCom width="w-[8rem]" high="h-[5rem]" back={src}></NewImageCom>
            </div>
            <h2 className="w-[23rem] h-[5rem]">{text}</h2>
        </a>
    </>)
}