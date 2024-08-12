import Chapter1 from "../chapter1";
import Circle1 from "../circle1";

export default function Propile(){
    return(
        <>
        <div className="mt-[5vh]">
            <Chapter1 title="PROFILE" bg="" />
          </div>
          <div className="flex flex-row ml-[10vw] mt-[3rem] gap-[3rem] ">
            <Circle1 title='My Resome' bg='bg-blue-200' />
            <Circle1 title='My Project' bg='bg-pink-200' />
            <h2 className="text-2xl font-semibold md:text-3xl lg:text-5xl">안녕하세요 <br /><p className=" font-light md:text-xl lg:text-3xl">끊임없이 도전하고 노력하는 <br /> 프론트엔드 개발자 이민재입니다. <br />부족한 부분을 찾고 개선하려 노력하고 있습니다 <br />잘 부탁드립니다!</p> </h2>
          </div>
        </>
    )
}