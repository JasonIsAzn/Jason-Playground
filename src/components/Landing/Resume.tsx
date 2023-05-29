import { useState, useRef } from 'react'
import Accordion from '../Accordion';

const resume_content = [
    {
        title: 'Education',
        content:
            <div className='flex flex-col space-y-4 font-base text-xl'>
                <div>Texas A&M University - Class of 2024</div>
                <div>Bachelor of Science in Computer Science, Mathematic</div>
                <div>Major GPR: 3.481</div>
            </div>
    },

    {
        title: 'Skills',
        content:
            <div className='grid grid-cols-2 gap-y-2 sm:grid-cols-3 sm:gap-y-4 font-base text-xl'>
                <div>C++</div>
                <div>Python</div>
                <div>GitHub</div>

                <div>Java/TypeScript</div>
                <div>React</div>
                <div>SQL</div>

                <div>Agile Project Developmnet</div>
                <div>Full-Stack Development</div>
                <div>Data Strucutres</div>

            </div>
    },

    { title: 'Experience', content: 'TB' },
]

const Resume = () => {
    const [isHovered, setIsHovered] = useState(true);
    const [open, setOpen] = useState(false);

    var expandRef = useRef<null | HTMLDivElement>(null);

    function collapseSection(isOpen: boolean) {
        setOpen(!open)
        if (open) {

            expandRef!.current!.scrollIntoView();
        }

    }


    return (
        <div id="section-resume" className='p-4 pt-24 pr-16 h-full pb-24 bg-[#F5F5F5]'
            ref={expandRef}
        >
            <div className="grid grid-cols-12">
                <div className={"col-start-2 lg:my-12 lg:mb-24 " + (open ? 'col-span-12' : 'col-span-5')}
                >
                    {/* Title */}
                    <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold pb-8'

                    >
                        My Resume
                    </h1>

                    {/* Expanded */}
                    {open && (

                        <div className='col-span-12 col-start-2 space-y-10'>
                            {/* Education */}
                            <div>
                                <div className='flex underline lg:text-4xl mb-4'>Education</div>
                                <ul className='flex flex-col lg:text-xl list-disc ml-6'>
                                    <li>Texas A&M University (TAMU), College Station, Texas </li>
                                    <li>Double Major: Bachelor of Science in Computer Science, Mathematics — May 2024</li>
                                    <li>Major GPR: 3.515</li>
                                    <li>Pursuing Minor in Cybersecurity</li>
                                </ul>
                            </div>

                            {/* Technical Skills */}
                            <div className='grid grid-cols-6'>
                                <div className='col-span-6 flex underline lg:text-4xl mb-4 '>Technical Skills</div>
                                <div className='col-span-4 grid gap-x-6 gap-y-2 sm:grid-cols-3 sm:gap-y-4 lg:text-xl ml-2'>
                                    <li>C++</li>
                                    <li>Python</li>
                                    <li>GitHub</li>
                                    <li>Java/TypeScript</li>
                                    <li>React</li>
                                    <li>SQL</li>
                                    <li>Agile Project Developmnet</li>
                                    <li>Full-Stack Development</li>
                                    <li>Data Strucutres</li>
                                </div>
                            </div>

                            {/* Relevant Coursework */}
                            <div className='grid grid-cols-6'>
                                <div className='col-span-6 flex underline lg:text-4xl mb-4'>Relevant Coursework</div>
                                <div className='col-span-6 grid gap-x-6 gap-y-2 sm:grid-cols-3  lg:text-xl list-disc ml-2'>
                                    <li>CSCE 221 (Data Structures & Algorithms)</li>
                                    <li>CSCE 315 (Foundations of Software Engineering)</li>
                                    <li>CSCE 410 (Operating Systems)</li>
                                    <li>CSCE 310 (Database Systems)</li>
                                    <li>CSCE 451 (Reverse Engineering)</li>
                                    <li>CSCE 411 (Design & Analysis of Algorithms)</li>
                                    <li>CSCE 465 (Computer & Network Security)</li>
                                    <li>CSCE 421 (Machine Learning)</li>
                                </div>
                            </div>
                            {/* Relevant Projects */}
                            <div className='flex flex-col'>
                                <div className='col-span-6 flex underline lg:text-4xl mb-4'>Relevant Projects</div>

                                <div>
                                    <p className='font-bold lg:text-2xl'>Aggies Compute: All-In-One TAMU Student Calculator — Aggie Coding Club, Texas A&M University</p>
                                    <p>Project Manager, January 2023 — April 2023</p>
                                    <div className='list-dics mt-2'>
                                        <li>Developed a website with holistic calculator and resources for CompSci/Math majors to use throughout curriculum</li>
                                        <li>Implemented full-stack development with an easily consumable interface for variety of technical backgrounds</li>
                                        <li>Utilized Agile software development model to oversee task management for a team of 10 members</li>
                                        <li><span className='font-semibold'>Broader impact: </span>Applied knowledge of full-stack and mathematics to develop a product that can maximize efficiency for computer science and mathematics students in their undergraduate career</li>
                                    </div>
                                </div>

                                <div>
                                    <p className='font-bold lg:text-2xl mt-4'>SHPE Mobile App — Society of Hispanic Professional Engineers</p>
                                    <p>Full-Stack Developer, May 2023 – Current</p>
                                    <div className='list-dics mt-2'>
                                        <li>Developed a mobile application for the Society of Hispanic Professional Engineers (SHPE)</li>
                                        <li>Collaborated with the organization officers and members to implement design, features, and gather feedback resulting in the deployment of a successful product.</li>
                                        <li><span className='font-semibold'>Broader impact:</span> Enhance the experience of over 300 members by creating a platform to communicate important announcements in real-time, increase member engagement in events, and provide general resources for members.</li>
                                    </div>
                                </div>

                                <div>
                                    <p className='font-bold lg:text-2xl mt-4'>Point-of-Sales (POS) System Design Project</p>
                                    <p>Front-End Developer, August 2022 – December 2022</p>
                                    <div className='list-dics mt-2'>
                                        <li>Managed a team of 5 to develop a POS system to improve order processing efficiency for employees and customers</li>
                                        <li>Developed live, full-stack application for Spin ‘N Stone Pizza POS system using JavaScript, React, PostgreSQL</li>
                                        <li>Led front-end development of application and honed experience with interface creation and Figma prototyping</li>
                                        <li><span className='font-semibold'>Broader impact:</span>Created application to model efficient POS system for local food retailer to apply undergraduate knowledge of full-stack development and real-time problem solving</li>
                                    </div>
                                </div>
                            </div>

                            {/* Work Experience */}
                            <div className='flex flex-col'>
                                <div className='col-span-6 flex underline lg:text-4xl mb-4'>Work Experience</div>

                                <div>
                                    <p className='font-bold lg:text-2xl'>Undergraduate Teaching Fellow — Shell Engineering Foundations Lab, College Station, TX</p>
                                    <p>Lab TA for ENGR 102/216/217/, Part-Time, August 2021 — Current</p>
                                    <div className='list-dics mt-2'>
                                        <li>Teaching electromagnetism & electromechanical systems to freshman/sophomore engineering students</li>
                                        <li>Grading technical lab reports and providing feedback</li>
                                        <li>Troubleshooting issues with Linux software and electromechanical equipment</li>
                                        <li><span className='font-semibold'>Broader impact:</span>Introducing engineering students to fundamental processes of data collection, analysis, and formal lab reporting that they will utilize in their respective fields
                                        </li>
                                    </div>
                                </div>
                            </div>
                            {/* Activities */}
                            <div className='flex flex-col'>
                                <div className='col-span-6 flex underline lg:text-4xl mb-4'>Activities</div>
                                <div className='list-dics mt-2'>

                                    <li>Aggie Coding Club, January 2023 — Current</li>
                                    <li>Society of Hispanic Professional Engineers, August 2021 — Current</li>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    )}


                    <a
                        href="Jason-Le-Resume.pdf"
                        download="Jason-Le-Resume.pdf"
                        className="text-2xl font-semibold underline decoration-primary_yellow decoration-2"
                    >
                        PDF of current resume
                    </a>
                    {/* Button */}
                    <div className={"flex items-center cursor-pointer " + (open ? 'justify-end mr-8' : 'justify-center my-32 mb-12 lg:mb-32 sm:mr-[100px] lg:mr-[300px]')}>
                        <div className={"flex justify-center items-center w-12 h-12 rounded-full bg-grey-yellow-5 transition-width duration-200 " + (open ? '' : 'hover:w-52 hover:x-2 hover:sm:w-64')}
                            onMouseEnter={() => setIsHovered(false)}
                            onMouseLeave={() => setIsHovered(true)}
                            onClick={() => collapseSection(open)}
                        >
                            {isHovered ? (
                                <div className='text-white font-semibold'>
                                    {open ? '-' : '+'}
                                </div>
                            ) : (
                                <div className='flex overflow-hidden whitespace-nowrap text-white text-lg cursor-pointer'>
                                    {open ? '-' : 'the whole resume'}
                                </div>
                            )}
                        </div>
                    </div>

                </div>


                {/* Accordian */}
                {!open && (
                    <div className="col-span-12 col-start-2 lg:col-start-0 lg:col-span-6 mt-12 w-full">
                        <div className="flex-col">
                            <div className='divide-y divide-black'>
                                <div></div>
                                {
                                    resume_content.map((item, index) => (
                                        <Accordion index={index} datas={item} />
                                    ))
                                }
                                <div></div>

                            </div>
                            <div></div>
                        </div>
                    </div>

                )}


            </div>

        </div >
    )
}

export default Resume;