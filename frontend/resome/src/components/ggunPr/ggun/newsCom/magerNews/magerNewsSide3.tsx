import { MajorSideCom, MajorSideCom3 } from "../data/majorNewsData";

import MajorNewsSideCom from "./magerNewsSideCom";

export default function MajorNewsSide3() {
    return (<>
        <div className=" flex flex-col mr-[5rem]">
        {MajorSideCom3.map((item)=><MajorNewsSideCom back={item.back} text={item.text} url={item.url} ></MajorNewsSideCom>)}  
        </div>

    </>)
}