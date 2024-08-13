

export type NewImageCom = {
    width: string;
    high: string;
    back: string;
}


export default function NewImageCom({ width, high, back}: NewImageCom) {
    return (<>
        <div className={`overflow-hidden rounded-[16px]`}>
            <img className={`${width} ${high} rounded-[16px]  hover:animate-ImgHover`} src={`${back}`} alt="안나옴" />
        </div>
    </>
    )
}