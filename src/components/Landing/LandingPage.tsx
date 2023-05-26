import Header from './Header';
import Navbar from '../Navbar';
import About from './About';
import Projects from './Projects'
import Resume from './Resume'
import Contact from './Contact'
import Footer from '../Footer'

const LandingPage = () => {
    return (
        <div className=''>
            <Header />
            <Navbar />
            <div className='divide-y divide-primary_yellow'>
                <About />
                <Projects />
                <Resume />
                <Contact />
                <Footer />
            </div>
        </div>
    )
}

export default LandingPage;