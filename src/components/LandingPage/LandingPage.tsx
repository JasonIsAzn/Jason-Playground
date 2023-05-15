import Header from './Header';
// import Typewriter from 'typewriter-effect/dist/core';


const LandingPage = () => {

    return (
        <div>
            <Header />
            <div className='flex flex-col justify-center items-center h-screen bg-[#F5F5F5]'>
                <p className='flex flex-col justify-center items-center'>AboutMe</p>
            </div>

            <div className='flex flex-col justify-center items-center h-screen bg-[#E1E1E1]'>
                <p className='flex flex-col justify-center items-center'>Projects</p>
            </div>

            <div className='flex flex-col justify-center items-center h-screen bg-[#F5F5F5]'>
                <p className='flex flex-col justify-center items-center'>Resume</p>
            </div>

            <div className='flex flex-col justify-center items-center h-screen bg-[#E1E1E1]'>
                <p className='flex flex-col justify-center items-center'>Contact</p>
            </div>
        </div>

    )
}

export default LandingPage;