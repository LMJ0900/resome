import NewImageCom from "./newsImageCom";

export default function OneRowOneCom({ back, title, text,url }: any) {
    return (<>
        <a href={url} className="flex flex-row">
            <div className="overflow-hidden h-[7rem] w-[10rem] rounded-[16px]">
                <NewImageCom width="w-[10rem]" high="h-[7rem]" back={back}></NewImageCom>
            </div>
            <div className="flex flex-col">
                <h2 className="w-[70rem] h-[3rem] font-bold">{title}</h2>
                <h2 className="whitespace-nowrap overflow-hidden text-ellipsis w-[70rem] h-[2rem]">{text}</h2>
                <div className="mt-[3rem]"></div>
            </div>
        </a>
    </>)
}