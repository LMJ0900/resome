type StockType = {
    url: string;
    name: string;
    price: number;
    upAndDown: string;
    capitalization: number;
    trading: number;
}


export default function StockTable({ url, name, price, upAndDown, capitalization, trading }: any) {

    function handleClick() {
        location.href = url
    }

    return (<>
        <tr onClick={handleClick} className="hover:bg-gray-300">
            <td>
                <button className="w-[1rem] h-[1rem]">
                    <img className="w-[1rem] h-[1rem]" src="/images/하트로고.png" alt="" />
                </button>
                {name}
            </td>
            <td className="text-center">
                {price}원
            </td>
            <td className="text-center">
                {upAndDown}</td>
            <td className="text-center">{capitalization}조원</td>
            <td className="text-end">{trading}주</td>

        </tr>
    </>)
}