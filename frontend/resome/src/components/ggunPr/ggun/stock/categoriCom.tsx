export default function CategoriCom({title,text}:any) {
    return (<>
    <button className={`w-[10rem] h-[6rem] rounded-[16px] bg-gray-400 focus:bg-red-500`}>
        <h2 className="text-left font-bold text-[1rem]">{title}</h2>
        <h2 className="text-left text-[0.8rem]">{text}</h2>
    </button>
    </>)
}