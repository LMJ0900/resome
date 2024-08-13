import { domesticStock } from "../data/domesticData";
import StockTable from "../stockTable";


export default function DomesticTable() {
    return (<>
        <table>
            <tr>
                <th className="w-[30rem] text-start" scope="col">검색된 주식</th>
                <th className="w-[10rem]" scope="col">현재가</th>
                <th className="w-[10rem]" scope="col">등락률</th>
                <th className="w-[10rem]" scope="col">시가총액</th>
                <th className="w-[10rem] text-end" scope="col">거래량</th>
            </tr>
            {domesticStock.map((item) => <StockTable url={item.url} name={item.name} price={item.price} upAndDown={item.upAndDown} capitalization={item.capitalization} trading={item.trading}> </StockTable>)}
        </table>

    </>)

}