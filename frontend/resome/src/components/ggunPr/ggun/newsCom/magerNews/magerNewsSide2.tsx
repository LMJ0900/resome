import {MajorSideCom2 } from "../data/majorNewsData";
import MajorNewsSideCom from "./magerNewsSideCom";


export default function MajorNewsSide2() {
    return (<>
        <div className=" flex flex-col mr-[5rem]">
        {MajorSideCom2.map((item)=><MajorNewsSideCom key={item.id} back={item.back} text={item.text} url={item.url} ></MajorNewsSideCom>)}
        </div>

    </>)
}