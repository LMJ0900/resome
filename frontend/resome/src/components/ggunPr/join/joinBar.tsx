import JoinInvest from "./joinInvest";

export default function JoinBar(){
    return(<>
        <h2 className="mt-4 text-white text-[3rem]">Join</h2>
        <div className="mt-4 flex items-center flex-col gap-3">
        <form action="" className="flex items-center flex-col gap-3">
        <div>
        <input className="border-b-2 bg-inherit w-[16rem] h-[3rem] relative" type="id" name="id" id="username" placeholder="username" ></input>
        <button className="absolute right-[4.5rem] top-[7.3rem] bg-white">중복체크</button>
        </div>
        <input className="border-b-2 bg-inherit w-[16rem] h-[3rem]" type="password" name="id" id="password" placeholder="password" ></input>
        <input className="border-b-2 bg-inherit w-[16rem] h-[3rem]" type="name" name="name" id="name" placeholder="name" ></input>
        <input className="border-b-2 bg-inherit w-[16rem] h-[3rem]" type="name" name="name" id="address" placeholder="address" ></input>
        <input className="border-b-2 bg-inherit w-[16rem] h-[3rem]" type="name" name="name" id="phone" placeholder="010-****-**** (-제외하고 입력)" ></input>
        <div>
        <input className="border-b-2 bg-inherit w-[8rem] h-[3rem]" type="personalNo6" name="personalNo6" id="personalNo6" placeholder="personalNo6" maxLength={6} ></input>
        -
        <input className="border-b-2 bg-inherit w-[8rem] h-[3rem]" type="personalNo1" name="personalNo1" id="personalNo1" placeholder="personalNo1" maxLength={1} ></input>
        </div>
        <JoinInvest/>
        </form>
        <button type="submit" className="mt-4 border-white border-2 rounded-[20px] w-[7rem] h-[3rem] text-white font-semibold">Join</button>
        </div>
    </>)
}