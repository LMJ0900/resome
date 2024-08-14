import Image from "next/image";
export default function Sidebar() {

    return (<>
        <div className="flex justify-center text-blue-400 bg-blue-300 w-[22rem] h-[60rem] fixed">
            <div className="flex items-center flex-col">
                <div className="profileIcon bg-white rounded-full w-[10rem] h-[10rem]">
                    <Image src="" alt="" />
                </div>
                <h2 className="flex justify-center mt-[3rem] text-2xl font-semibold md:text-3xl lg:text-5xl">Lee, Minjae</h2>
                <h2 className="mt-[1.5rem] flex justify-center md:text-xl lg:text-3xl">front-end developer</h2>
                <hr className="mt-[3rem] w-full border-dashed " />
                <div>
                    <ul className="flex justify-center flex-col sideIcon">
                        <li className="mt-[3rem]">
                            <div className="phoneInfo flex flex-col justify-center items-center">
                                <Image className="" src="/images/phone24.png" width={100}
                                    height={100} alt="핸드폰" />
                                <h2 className="">010-8500-9170</h2>
                            </div>
                        </li>
                        <li className="mt-[3rem]">
                            <div className="emailInfo flex flex-col justify-center items-center">
                                <Image className="" width={100}
                                    height={100} src="/images/mail24.png" alt="핸드폰" />
                                <h2 className="lg:text-xl md:text-base sm:text-sm">lmjcode0930@gmail.com</h2>
                                <h2 className="lg:text-xl md:text-base sm:text-sm">lmjcode0930@naver.com</h2>
                            </div>
                        </li>
                        <li className="mt-[3rem]">
                            <div className="emailInfo flex flex-col justify-center items-center">
                                <Image className="" width={100}
                                    height={100} src="/images/git.png" alt="핸드폰" />
                                <a href="https://github.com/LMJ0900" className="lg:text-xl md:text-base sm:text-sm">https://github.com/LMJ0900</a>
                            </div>
                        </li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    </>)
}