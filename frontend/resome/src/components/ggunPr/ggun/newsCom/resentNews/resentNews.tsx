import { resentNewData } from "../data/resentNewsData";
import HeadTitleCom from "../headTitleCom";
import OneRowOneCom from "../oneRowOneCom";

export default function ResentNews(){
    return(<>
    <div className="mr-[4rem]">
    <HeadTitleCom title={"최신뉴스"}></HeadTitleCom>
    </div>
   {resentNewData.map((item)=><OneRowOneCom back={item.back} text={item.text} title={item.title} url={item.url}></OneRowOneCom>)}
    </>)
}