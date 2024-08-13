import { allMagerNewsData } from "../data/allMajorNewsData";
import HeadTitleCom from "../headTitleCom";
import OneRowOneCom from "../oneRowOneCom";

export default function AllMagerNews(){
    return(<>
    <HeadTitleCom title={"모든 주요뉴스"}></HeadTitleCom>
     {allMagerNewsData.map((item)=><OneRowOneCom back={item.back} text={item.text} title={item.title} url={item.url}></OneRowOneCom>)}
    </>)
}