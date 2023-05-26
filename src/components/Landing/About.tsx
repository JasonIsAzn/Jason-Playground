import { useState } from 'react'


const About = () => {
    const [isHovered, setIsHovered] = useState(true);
    const [open, setOpen] = useState(false);

    console.log(open)

    return (
        <div id="section-about" className='p-2 h-full pb-24 bg-[#F5F5F5]'>
            <div className="grid grid-cols-12">
                {/* Title */}
                <div className="col-span-12 col-start-2 space-y-2 my-12 mb-24 text-5xl md:text-6xl lg:text-8xl">
                    <p className='font-bold '>Howdy,</p>
                    <p className='font-semibold'> It's nice to meet you. </p>
                </div>


                {/* Paragraph */}
                <div></div> {/* IT JUST WOKRS - CRIES */}

                <div className="col-span-10 col-start-2 space-y-8 text-2xl lg:col-span-5 md:text-4xl lg:text-4xl">
                    <p >I'm currently a student at <span className="text-[#500] font-semibold">Texas A&M</span> studying computer science. I'm working as a Teacher Assistant for engineering and computer science courses.</p>

                    <p> I learn by working on side projects with friends. I have a passion for software engineering, web development, and teaching. I'm currently learning app development, machine learning, and cyber security.</p>

                    <p> I enjoy listening to music, watching anime, and working out </p>

                </div>

                {/* Profile Image */}
                <div className="col-span-10 col-start-2 lg:col-span-7 flex justify-center items-center">
                    <div className="mt-16 w-[60%] sm:1/3 lg:mt-0 lg:w-1/2">
                        <img src={require("../../assets/profile.jpg")} alt="profile" className="rounded-full" />
                    </div>
                </div>

                {/* Expanded Section */}
                {open && (
                    <div className='col-span-11 col-start-2'>
                        <div className='col-span-5 col-start-2 mt-24 md:text-4xl lg:text-4xl'>Test</div>

                    </div>
                )}

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
                                {open ? '-' : 'Learn more about me!'}
                            </div>
                        )}
                    </div>
                </div>


            </div>

        </div>
    )
}

export default About;