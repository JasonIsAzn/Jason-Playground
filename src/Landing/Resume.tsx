import Accordion from '../components/Accordion';

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

    return (
        <div id="section-resume" className='p-4 pt-24 pr-16 h-full pb-24 bg-[#F5F5F5]'>
            <div className="grid grid-cols-12">
                <div className="col-span-5 col-start-2 space-y-2 my-12 mb-24">
                    <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold pb-14'>My Resume</h1>
                    <a
                        href="Jason-Le-Resume.pdf"
                        download="Jason-Le-Resume.pdf"
                        className="text-2xl font-semibold underline decoration-primary_yellow decoration-2"
                    >
                        PDF of current resume
                    </a>
                </div>

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

            </div>

        </div>
    )
}

export default Resume;