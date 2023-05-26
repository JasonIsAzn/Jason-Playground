import { useState } from 'react'

const Projects = () => {
    const [switchText1, setSwitchText1] = useState(true);
    const [switchText2, setSwitchText2] = useState(true);
    const [switchText3, setSwitchText3] = useState(true);

    const [isHovered, setIsHovered] = useState(true);
    const [open, setOpen] = useState(false);



    return (
        <div id="section-projects" className='flex flex-col justify-center items-center py-12 pb-24 bg-[#F5F5F1]'>
            {/* Title */}
            <h1 className='text-5xl md:text-6xl lg:text-8xl font-semibold py-14'>Projects</h1>

            {/* Project Cards */}
            <div className="flex flex-row flex-wrap justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 ">
                <div className="bg-white w-[90%] sm:w-96 h-96 static bg-primary_yellow hover:border-black hover:border hover:border-dashed hover:border-2 rounded border-2"
                    onMouseEnter={() => setSwitchText1(false)}
                    onMouseLeave={() => setSwitchText1(true)}
                >
                    <div className="bg-white w-[100%] h-[100%] hover:-m-6 border hover:border-primary_yellow hover:border-3 border-black rounded border-2 hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in py-12 px-8 flex">
                        {switchText1 && (
                            <div className='flex flex-col justify-end'>
                                <img
                                    src={require("../../assets/ac_logo.png")}
                                    alt="aggie compute logo"
                                    className='h-14 w-14'>
                                </img>
                                <p className="text-2xl font-semibold">Aggies Compute</p>
                            </div>
                        )}
                        {!switchText1 && (
                            <div className='flex flex-col space-y-2'>
                                <h1 className="text-2xl font-semibold">Aggies Compute</h1>
                                <p className="flex flex-col text-lg space-y-1">
                                    <span> Aggies Compute is the free resource hub designed to support students throughout their college journey.</span>
                                    <span> We aim to centralize valuable resources and create comprehensive step-by-step produceures to cater to all learning styles.</span>
                                    <a href='/#' className='pt-8 text-base underline decoration-primary_yellow decoration-2'>Learn More</a>
                                </p>
                            </div>
                        )}
                    </div>
                </div>


                <div className="bg-white w-[90%] sm:w-96 h-96 static bg-primary_yellow hover:border-black hover:border hover:border-dashed hover:border-2 rounded border-2"
                    onMouseEnter={() => setSwitchText3(false)}
                    onMouseLeave={() => setSwitchText3(true)}
                >
                    <div className="bg-white w-[100%] h-[100%] hover:-m-6 hover:border-primary_yellow hover:border-3 border border-black rounded border-2 hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in flex py-12 px-8 flex">
                        {switchText3 && (
                            <div className='flex flex-col justify-end'>
                                <img
                                    src={require("../../assets/shpe.png")}
                                    alt="shpe logo"
                                    className='h-14 w-14'>
                                </img>
                                <p className="text-2xl">SHPE Mobile App</p>
                            </div>
                        )}
                        {!switchText3 && (
                            <div className='flex flex-col space-y-2'>
                                <h1 className="text-2xl font-semibold">SHPE Mobile App</h1>
                                <p className="flex flex-col text-lg space-y-1">
                                    <span>The SHPE app is designed for members of the Society of Hispanic Professional Engineers. </span>
                                    <span>We provide features like annoucmnets, connection between members, and access to resources.</span>
                                    <span>The goal is to increase overall member invovlement.</span>
                                    <a href='/#' className='text-base underline decoration-primary_yellow decoration-2'>Learn More</a>
                                </p>
                            </div>
                        )}
                    </div>
                </div>


                <div className="bg-white w-[90%] sm:w-96 h-96 static bg-primary_yellow hover:border-black hover:border hover:border-dashed hover:border-2 rounded border-2"
                    onMouseEnter={() => setSwitchText2(false)}
                    onMouseLeave={() => setSwitchText2(true)}
                >
                    <div className="bg-white w-[100%] h-[100%] hover:-m-6 hover:border-primary_yellow hover:border-3  border border-black rounded border-2 hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in py-12 px-8 flex">
                        {switchText2 && (
                            <div className='flex flex-col justify-end'>
                                <img
                                    src={require("../../assets/pizza.png")}
                                    alt="pizza logo"
                                    className='h-28 w-28 -m-4 -mb-8'>
                                </img>
                                <p className="text-2xl font-semibold">Point of Sale System</p>
                            </div>
                        )}
                        {!switchText2 && (
                            <div className='flex flex-col space-y-2'>
                                <h1 className="text-2xl font-semibold">Point of Sale System</h1>
                                <p className="flex flex-col text-lg space-y-1">
                                    <span>A point of system application for Spin N' Stone, a pizza company. </span>
                                    <span>We developed a  user interface for both mangament and customer to improve expereience of both customer and manager</span>
                                    <a href='/#' className='pt-14 text-base underline decoration-primary_yellow decoration-2'>Learn More</a>
                                </p>
                            </div>
                        )}
                    </div>
                </div>


            </div>

            {/* Expanded Section */}



            {/* Button */}
            <div className="col-start-9 col-span-2 flex justify-center items-center mt-16 cursor-pointer">
                <div className={"flex justify-center items-center w-12 h-12 rounded-full bg-grey-yellow-5 transition-width duration-200 " + (open ? '' : 'hover:w-52 hover:x-2 hover:sm:w-64')}
                    onMouseEnter={() => setIsHovered(false)}
                    onMouseLeave={() => setIsHovered(true)}
                    onClick={() => setOpen(!open)}
                >
                    {isHovered ? (
                        <div className='text-white font-semibold'>
                            {open ? '-' : '+'}
                        </div>
                    ) : (
                        <div className='flex overflow-hidden whitespace-nowrap text-white text-lg cursor-pointer'>
                            {open ? '-' : 'Project details and more'}
                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}

export default Projects;