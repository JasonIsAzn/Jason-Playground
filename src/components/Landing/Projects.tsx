import { useState } from 'react'

const Projects = () => {
    const [switchText, setSwitchText] = useState<number | null>(null);

    function isMobiletDevice(): boolean {
        const userAgent: string = navigator.userAgent;

        const isMobile: boolean = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

        return isMobile ? true : false;
    }

    function onMouseHover(index: number | null) {
        if (isMobiletDevice()) {
            return;
        }
        setSwitchText(index);
    }

    function onTouchClick(index: number | null) {
        if (!isMobiletDevice()) {
            return;
        }
        if (switchText === index) {
            setSwitchText(null);
        } else {
            setSwitchText(index);
        }
    }

    return (
        <div id="section-projects" className='flex flex-col justify-center items-center py-12 pb-24 bg-[#F5F5F1]'>
            {/* Title */}
            <h1 className='text-5xl md:text-6xl lg:text-8xl font-semibold py-14'>Projects</h1>

            {/* Project Cards */}

            <div className="flex flex-row flex-wrap justify-center items-center space-y-4 sm:space-y-0 md:space-x-4">
                <div className={"bg-white w-[90%] sm:w-96 h-96 static bg-primary_yellow rounded border-2 " + (!isMobiletDevice() ? "hover:border-black hover:border hover:border-dashed hover:border-2" : "")}
                    onMouseEnter={() => onMouseHover(0)}
                    onMouseLeave={() => onMouseHover(null)}
                    onClick={() => onTouchClick(0)}
                >
                    <div className={"bg-white w-[100%] h-[100%] border-black rounded border-2 transition-all duration-150 ease-out py-12 px-8 flex border " + (!isMobiletDevice() ? "hover:-m-6 hover:border-primary_yellow hover:border-3 hover:shadow-2xl hover:ease-in" : "") + (switchText === 0 && isMobiletDevice() ? "border-primary_yellow border-3 shadow-2xl ease-in" : "")}>
                        {switchText !== 0 && (
                            <div className='flex flex-col justify-end'>
                                <img
                                    src={require("../../assets/ac_logo.png")}
                                    alt="aggie compute logo"
                                    className='h-14 w-14'>
                                </img>
                                <p className="text-2xl font-semibold">Aggies Compute</p>
                            </div>
                        )}
                        {switchText === 0 && (
                            <div className='flex flex-col space-y-2'>
                                <h1 className="text-2xl font-semibold">Aggies Compute</h1>
                                <p className="flex flex-col text-lg space-y-1">
                                    <span> Aggies Compute is the free resource hub designed to support students throughout their college journey.</span>
                                    <span> We aim to centralize valuable resources and create comprehensive step-by-step produceures to cater to all learning styles.</span>
                                    <div className='pt-8'>
                                        <a
                                            href='https://github.com/aggie-coding-club/Aggies-Compute'
                                            rel="noreferrer"
                                            target="_blank"
                                            className='text-base underline decoration-primary_yellow decoration-2'
                                        >
                                            Learn More
                                        </a>
                                    </div>
                                </p>
                            </div>
                        )}
                    </div>
                </div>


                <div className={"bg-white w-[90%] sm:w-96 h-96 static bg-primary_yellow rounded border-2 " + (isMobiletDevice() ? "" : "hover:border-black hover:border hover:border-dashed hover:border-2")}
                    onMouseEnter={() => onMouseHover(1)}
                    onMouseLeave={() => onMouseHover(null)}
                    onClick={() => onTouchClick(1)}
                >
                    <div className={"bg-white w-[100%] h-[100%] border-black rounded border-2 transition-all duration-150 ease-out py-12 px-8 flex border " + (isMobiletDevice() ? "" : "hover:-m-6 hover:border-primary_yellow hover:border-3 hover:shadow-2xl hover:ease-in") + (switchText === 1 && isMobiletDevice() ? "border-primary_yellow border-3 shadow-2xl ease-in" : "")}
                    >
                        {switchText !== 1 && (
                            <div className='flex flex-col justify-end'>
                                <img
                                    src={require("../../assets/shpe.png")}
                                    alt="shpe logo"
                                    className='h-14 w-14'>
                                </img>
                                <p className="text-2xl">SHPE Mobile App</p>
                            </div>
                        )}
                        {switchText === 1 && (
                            <div className='flex flex-col space-y-2'>
                                <h1 className="text-2xl font-semibold">SHPE Mobile App</h1>
                                <p className="flex flex-col text-lg space-y-1">
                                    <span>The SHPE app is designed for members of the Society of Hispanic Professional Engineers. </span>
                                    <span>We provide features like annoucmnets, connection between members, and access to resources.</span>
                                    <span>The goal is to increase overall member invovlement.</span>
                                    <div>
                                        <a href='/#'
                                            rel="noreferrer"
                                            target="_blank"
                                            className='text-base underline decoration-primary_yellow decoration-2'
                                        >
                                            Learn More
                                        </a>
                                    </div>
                                </p>
                            </div>
                        )}
                    </div>
                </div>


                <div className={"bg-white w-[90%] sm:w-96 h-96 static bg-primary_yellow rounded border-2 " + (isMobiletDevice() ? "" : "hover:border-black hover:border hover:border-dashed hover:border-2")}
                    onMouseEnter={() => onMouseHover(2)}
                    onMouseLeave={() => onMouseHover(null)}
                    onClick={() => onTouchClick(2)}
                >
                    <div className={"bg-white w-[100%] h-[100%] border-black rounded border-2 transition-all duration-150 ease-out py-12 px-8 flex border " + (isMobiletDevice() ? "" : "hover:-m-6 hover:border-primary_yellow hover:border-3 hover:shadow-2xl hover:ease-in") + (switchText === 2 && isMobiletDevice() ? "border-primary_yellow border-3 shadow-2xl ease-in" : "")}>
                        {switchText !== 2 && (
                            <div className='flex flex-col justify-end'>
                                <img
                                    src={require("../../assets/pizza.png")}
                                    alt="pizza logo"
                                    className='h-28 w-28 -m-4 -mb-8'>
                                </img>
                                <p className="text-2xl font-semibold">Point of Sale System</p>
                            </div>
                        )}
                        {switchText === 2 && (
                            <div className='flex flex-col space-y-2'>
                                <h1 className="text-2xl font-semibold">Point of Sale System</h1>
                                <p className="flex flex-col text-lg space-y-1">
                                    <span>A point of system application for Spin N' Stone, a pizza company. </span>
                                    <span>We developed a  user interface for both mangament and customer to improve expereience of both customer and manager</span>
                                    <div className='pt-14'>
                                        <a
                                            href='https://github.com/JasonIsAzn/CSC315_FA22_FInal_Project'
                                            rel="noreferrer"
                                            target="_blank"
                                            className='text-base underline decoration-primary_yellow decoration-2'
                                        >
                                            Learn More
                                        </a>
                                    </div>
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;