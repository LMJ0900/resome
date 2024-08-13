import CreAccountForm from "@/components/ggunPr/ggun/account/create/creAccountForm";
import Header from "@/components/ggunPr/ggun/main/header";

export default function creAccount(){
    return(<>
    <Header></Header>
    <div className="flex justify-center items-center mt-20 flex-col">
    <h2 className="text-[5rem] text-[--color-pebble-hover]">계좌개설페이지</h2>
    <div className="mt-20">
    <CreAccountForm></CreAccountForm>
    </div>
    </div>
   
    </>)
}