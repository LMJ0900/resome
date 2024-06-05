export default function Sidebar() {
    return (<>
        <div className="flex justify-center text-blue-400 bg-blue-300 w-[20vw] h-full">
            <div className="flex justify-center items-center flex-col">
                <div className="profileIcon bg-white rounded-full w-[15vw] h-[15vw] mt-[5vh]">
                    <img src="" alt="" />
                </div>
                <h2 className="flex justify-center mt-[10vh] text-2xl font-semibold md:text-3xl lg:text-5xl">Lee, Minjae</h2>
                <h2 className="mt-[2.5vh] flex justify-center md:text-xl lg:text-3xl">front-end developer</h2>
                <hr className="mt-[5vh] w-full border-dashed "/>
                <div>
                    <ul className="flex justify-center flex-col sideIcon">
                        <li className="mt-[5vh]">
                            <div className="phoneInfo flex flex-col justify-center items-center">
                                <img className="" src="/images/phone24.png" alt="핸드폰" />
                                <h2 className="">010-8500-9170</h2>
                            </div>
                        </li>
                        <li className="mt-[5vh]">
                            <div className="emailInfo flex flex-col justify-center items-center">
                                <img className="" src="/images/mail24.png" alt="핸드폰" />
                                <h2 className="lg:text-xl md:text-base sm:text-sm">lmjcode0930@gmail.com</h2>
                                <h2 className="lg:text-xl md:text-base sm:text-sm">lmjcode0930@naver.com</h2>
                            </div>
                        </li>
                        <li className="mt-[5vh]">
                            <div className="emailInfo flex flex-col justify-center items-center">
                                <img className="" src="/images/git.png" alt="핸드폰" />
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