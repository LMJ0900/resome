export default function creAccountForm() {
    return (
        <>
            <div className="w-[50rem] h-[30rem] bg-[--color-pebble-3] rounded-[1rem] flex  items-center flex-col">
                <h2 className="mt-8 text-[3rem]">Create Account</h2>
                <form action="" className=" mt-10 flex justify-center items-center flex-col gap-[3rem]">
                    <div className="flex flex-row">
                        <h2>계좌비밀번호 :</h2>
                        <input type="text" className="ml-[1rem]" />
                    </div>
                    <div className="flex flex-row">
                        <h2>연결계좌번호 :</h2>
                        <input type="text" className="ml-[1rem]" />
                    </div>
                    <div className="flex flex-row">
                        <h2>연결계좌은행 :</h2>
                        <input type="text" className="ml-[1rem]" />
                    </div>
                    <div className="flex flex-row">
                        <h2>계좌 타입 :</h2>
                        <input type="text" className="ml-[1rem]" />
                    </div>
                </form>
            </div>
        </>
    )
}