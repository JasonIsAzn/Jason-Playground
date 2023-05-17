import React, { useState } from 'react'

const Projects = () => {
    const [switchText1, setSwitchText1] = useState(true);
    const [switchText2, setSwitchText2] = useState(true);
    const [switchText3, setSwitchText3] = useState(true);


    return (
        <div id="section-projects" className='flex flex-col justify-center items-center py-12 bg-[#F3F3F3]'>
            <h1 className='text-5xl md:text-6xl lg:text-8xl font-semibold pb-14 ' >Projects</h1>
            <div className="flex flex-row justify-center items-center">

                <div className="bg-white w-96 h-96 static bg-primary_yellow hover:border-black hover:border hover:border-dashed rounded border-2"
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
                            <div className='flex flex-col'>
                                <h1 className="text-2xl font-semibold">Aggies Compute</h1>
                                <p className="text-xl">Test</p>
                            </div>
                        )}
                    </div>
                </div>


                <div className="bg-white w-96 h-96 static bg-primary_yellow hover:border-black hover:border hover:border-dashed rounded border-2"
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
                            <div>
                                <h1 className="text-2xl font-semibold">Point of Sale System</h1>
                                <p className="text-xl">Learn More</p>
                            </div>
                        )}
                    </div>
                </div>


                <div className="bg-white w-96 h-96 static bg-primary_yellow hover:border-black hover:border hover:border-dashed rounded border-2"
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
                            <div>
                                <h1 className="text-2xl font-semibold">SHPE Mobile App</h1>
                                <p className="text-xl">Learn More</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;