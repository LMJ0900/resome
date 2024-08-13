
import { Accountlist } from "../data/accountlist"
import { AccoountListType } from "../types/account"


function AccList(props: AccoountListType) {
    return (<>
        <tbody className="" >
            <td className="text-center">{props.name}</td>
            <td className="text-center">{props.accountNumber}</td>
            <td className="text-center">{props.investDate}</td>
            <td className="text-center">{props.rateOfReturn}</td>
        </tbody>
    </>)
}

export default function Account() {
    return (<>
        <div className="ml-72">
            <div className="my-20 text-red-200 text-3xl font-bold">계좌정보</div>
        </div>
        <hr className="my-8" />
        <table className="ml-72 ">
            <colgroup className="">
                <col className=" bg-red-200" />
                <col className="bg-violet-50 " />
                <col className="col3" />
                <col className="col4" />
            </colgroup>
            <tr className="">
                <th className="w-[10rem] ">계좌별명</th>
                <th className="w-[20rem] ">계좌번호</th>
                <th className="w-[30rem] ">투자기간</th>
                <th className="w-[10rem] ">수익률</th>
            </tr>
            {Accountlist.map((Item) => <AccList name={Item.name} accountNumber={Item.accountNumber} investDate={Item.investDate} rateOfReturn={Item.rateOfReturn}></AccList>)}
        </table>

    </>
    )
}