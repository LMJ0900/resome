export default function Chapter(props: { title: any; bg: any; }) {
    const {title,bg} = props;
    return (<>
    <div className="flex justify-center">
       <div className={`${bg} flex justify-center items-center rounded-[80px] w-[60vw] h-[4vh] border-2 border-indigo-500/70 font-semibold text-[2.8vh]`}>
        <h2>{title}</h2>
       </div>
       </div>
    </>);
}
