
const About = () => {
    return (
        <div id="section-about" className='p-2 h-full pb-24 bg-[#F5F5F5]'>
            <div className="grid grid-cols-12">
                <div className="col-span-12 col-start-2 space-y-2 my-12 mb-24 text-5xl md:text-6xl lg:text-8xl">
                    <p className='font-bold '>Howdy,</p>
                    <p className='font-semibold'> It's nice to meet you. </p>
                </div>

                {/* IT JUST WOKRS - CRIES */}
                <div></div>

                <div className="col-span-10 col-start-2 space-y-8 text-2xl lg:col-span-5 md:text-4xl lg:text-4xl">
                    <p >I'm currently a student at <span className="text-[#500] font-semibold">Texas A&M</span> studying computer science. I'm working as a Teacher Assistant for engineering and computer science courses.</p>

                    <p> I learn by working on side projects with friends. I have a passion for software engineering, web development, and teaching. I'm currnetly learning app development, machine learning, and cyber security.</p>

                    <p> I enjoy listening to music, watching anime, and working out </p>

                </div>
                <div className="col-span-10 col-start-2 lg:col-start-0 lg:col-span-6 flex justify-center items-center">
                    <div className="mt-16 w-1/3 lg:mt-0  lg:w-1/2">
                        <img src={require("../assets/profile.jpg")} alt="profile" className="rounded-full" />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default About;