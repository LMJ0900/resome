import NewImageCom from "../newsImageCom";

export default function UpNewsMain({ back, logo, text }: any) {
    return (<>
        <div className="flex flex-col">
            <div className="overflow-hidden w-[25rem] h-[15rem] rounded-[16px]">
                <NewImageCom width="w-[25rem]" high="h-[15rem]" back={back}></NewImageCom>
            </div>
            <a className="w-[25rem] h-[4rem]" href="">
                <img src={logo} alt="이미지오류" />
            </a>
            <h2>{text}</h2>
        </div>
    </>)

}