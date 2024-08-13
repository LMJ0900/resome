import CategoriCom from "../categoriCom";
import FillterCom from "../fillterCom";
import DomesticTable from "./domesticTable";

export default function DomesticStock() {
    return (<>
        <div className="mt-[1rem] flex flex-row gap-[0.5rem]">
            <CategoriCom title="국내전체" text="원하는 주식시장을 골라보세요"></CategoriCom>
            <CategoriCom title="저평가 성장주" text="앞으로 성장할 저평가된 주식"></CategoriCom>
            <CategoriCom title="아직 저렴한 가치주" text="회사의 순자산 대비 저평가된 주식"></CategoriCom>
            <CategoriCom title="꾸준한 배당주" text="배당을 꾸준히 주는 주식"></CategoriCom>
            <CategoriCom title="고수익 저평가" text="회사의 높은 수익에 비해 저평가된 주식"></CategoriCom>
            <CategoriCom title="성장기대주" text="원하는 주식시장을 골라보세요"></CategoriCom>
        </div>
        <FillterCom></FillterCom>
        <DomesticTable></DomesticTable>
    </>)
}