import Chapter from "./chapter";

export default function Chapter1({title, bg}:{title:string, bg:string}){
    return(
        <Chapter title={`${title}`} bg={`${bg}`} ></Chapter>
    );
}