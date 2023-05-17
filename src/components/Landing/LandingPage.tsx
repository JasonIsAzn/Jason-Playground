import Header from './Header';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects'
import Resume from './Resume'

const LandingPage = () => {

    return (
        <div>
            <Header />
            <Navbar />
            <About />
            <Projects />
            <Resume />

            <div className='flex flex-col justify-center items-center h-screen bg-[#E1E1E1]'>
                <p className='flex flex-col justify-center items-center'>Contact</p>
            </div>
        </div>

    )
}

export default LandingPage;