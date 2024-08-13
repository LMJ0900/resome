import Header from "@/components/ggunPr/ggun/main/header";
import AllMagerNews from "@/components/ggunPr/ggun/newsCom/allMagerNews/allMagerNews";
import Hotnews from "@/components/ggunPr/ggun/newsCom/hotnews/hotnews";
import MajorNews from "@/components/ggunPr/ggun/newsCom/magerNews/majorNews";
import ResentNews from "@/components/ggunPr/ggun/newsCom/resentNews/resentNews";
import UpNews from "@/components/ggunPr/ggun/newsCom/upnews/upnews";





export default function News(){
    return(<>
    <Header></Header>
    <div className=" flex items-center flex-col justify-center">
    <MajorNews></MajorNews>
    <Hotnews></Hotnews>
    <UpNews></UpNews>
    <ResentNews></ResentNews>
    <AllMagerNews></AllMagerNews>
    </div>
    </>)
}