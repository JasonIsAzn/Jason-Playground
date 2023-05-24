import { useState } from 'react';
const resume_content = [
    { title: 'Education', content: 'Texas A&M University' },
    { title: 'Skills', content: 'React, TypeScript, Node.js, Express, MongoDB, Python, Java, C++' },
    { title: 'Experience', content: 'N/A' },
]



const Resume = () => {

    const [selected, setSelected] = useState<number | null>(null);

    const toggle = (index: number) => {
        if (selected === index) {
            return setSelected(null);
        }
        setSelected(index);
    }



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

                <div className="col-span-5 col-start-2 lg:col-start-0 lg:col-span-6 mt-12 w-full ">
                    <div className="flex-col divide-y-2 divide-black">
                        <div></div>
                        {resume_content.map((item, index) => (
                            <div className="py-6">
                                <div
                                    className='flex flex-row justify-between items-center cursor-pointer'
                                    onClick={() => toggle(index)}
                                >
                                    <div className="font-bold text-7xl">
                                        <h2>{item.title}</h2>
                                    </div>
                                    <span className='text-2xl'>{selected === index ? " - " : "+"}</span>

                                </div>

                                <div
                                    className={"font-base text-xl mt-6" + (selected === index ? " block" : " hidden")}
                                >
                                    {item.content}
                                </div>
                            </div>
                        ))}
                        <div></div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Resume;