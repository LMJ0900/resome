export default function Circle(props: { title: any; bg: any; }) {
    const {title,bg} = props;

    return (<>
    <div className={`${bg} flex justify-center items-center rounded-full w-[11vw] h-[11vw]  md:text-xl lg:text-3xl`}>
        <h2>{title}</h2>
    </div>
    </>);
}
