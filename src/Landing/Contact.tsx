
const Contact = () => {
    return (
        <div id="section-contact" className='flex flex-col py-8 pb-64  bg-[#F5F5F1]'>
            <div className="grid grid-cols-12">
                <p className='col-start-2 col-span-11 text-5xl md:text-6xl lg:text-7xl font-bold m-10'>Contact</p>

                <div className="col-span-12 flex flex-col sm:flex-row sm:flex-wrap justify-center items-center space-x-4 pt-48 text-3xl font-semibold m-8">
                    <div className="hidden sm:block inline-block h-[35px] min-h-[1em] w-0.5 self-stretch bg-black opacity-50"></div>
                    <a className="mb-6" href="mailto:jasonisazn@tamu.edu">Email</a>
                    <div className="hidden sm:block inline-block h-[35px] min-h-[1em] w-0.5 self-stretch bg-black opacity-50"></div>
                    <a className="mb-6" href="https://www.linkedin.com/in/vjasonle/">Linkedln</a>
                    <div className="hidden sm:block inline-block h-[35px] min-h-[1em] w-0.5 self-stretch bg-black opacity-50"></div>
                    <a className="mb-6" href="https://github.com/JasonIsAzn">GitHub</a>
                    <div className="hidden sm:block inline-block h-[35px] min-h-[1em] w-0.5 self-stretch bg-black opacity-50"></div>
                    <a className="mb-6" href="https://www.instagram.com/thereal.jle/" >Instagram</a>
                    <div className="hidden sm:block inline-block h-[35px] min-h-[1em] w-0.5 self-stretch bg-black opacity-50"></div>
                </div>

            </div>
        </div>
    )
}

export default Contact;