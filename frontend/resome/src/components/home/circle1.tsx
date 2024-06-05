import Circle from "./circle";

export default function Circle1({title, bg}:{title:string, bg:string}){
    return(
        <Circle title={`${title}`} bg={`${bg}`}></Circle>
    )
}