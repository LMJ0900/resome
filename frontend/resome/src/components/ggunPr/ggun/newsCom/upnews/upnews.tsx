
import { upNewsMainData, upNewsSubData } from "../data/upNewsData";
import HeadTitleCom from "../headTitleCom";
import OneRowTwoCom from "../oneRowTwoCom";
import UpNewsMain from "./upNewsMain";


export default function UpNews() {
    return (<>
        <div className="mr-[6rem]">
        <HeadTitleCom title={"급상승 뉴스"}></HeadTitleCom>
        </div>
        <div className="flex flex-row gap-[5rem]">
           {upNewsMainData.map((item)=><UpNewsMain back={item.back}logo={item.logo} text={item.text}></UpNewsMain>)}
        </div>
        <div className="mb-[3rem]"></div>
       {upNewsSubData.map((item)=><OneRowTwoCom src={item.src} src2={item.src2} url={item.url} url2={item.url2} text={item.text} text2={item.text2}></OneRowTwoCom>)}
    </>)

}