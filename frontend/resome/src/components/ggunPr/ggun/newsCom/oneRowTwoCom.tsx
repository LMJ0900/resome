import HotnewsCom2 from "./hotnews/hotnewsCom2";

export default function OneRowTwoCom({url,text,src,url2,text2,src2}:any){
    return(<>
     <div className="flex flex-row gap-[3rem]">
    <HotnewsCom2 url={url} text={text} src={src}></HotnewsCom2>
    <HotnewsCom2 url={url2} text={text2} src={src2}></HotnewsCom2>
    </div>
    </>)
}