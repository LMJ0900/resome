import { MajorSideCom } from "../data/majorNewsData";
import MajorNewsSideCom from "./magerNewsSideCom";


export default function MajorNewsSide() {
    return (<>
        <div className=" flex flex-col mr-[5rem]">
            {MajorSideCom.map((item)=><MajorNewsSideCom key={item.id} back={item.back} text={item.text} url={item.url} ></MajorNewsSideCom>)}
        </div>

    </>)
}