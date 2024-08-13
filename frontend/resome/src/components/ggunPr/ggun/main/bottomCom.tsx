import { bottomComData } from "./data/main"
import { botcom } from "./types/main"


function Botcom(props: botcom) {
    return (<>
        <div className=" w-[25vw] h-[20vh]">
            <div className="flex justify-center">
                <img className="w-[22.5vw] h-[20vh]" src={props.src} alt={props.title} />
            </div>
        </div>
    </>)
}

export default function BottomCom() {
    return (
        <>
            <div className=" w-[50vw] h-[20vh] flex flex-row">
            {bottomComData.map((bottomComItem) => <Botcom title={bottomComItem.title} src={bottomComItem.src}></Botcom>)}
            </div>
        </>
    )
}