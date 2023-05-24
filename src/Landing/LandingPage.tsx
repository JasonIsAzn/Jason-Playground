import Header from './Header';
import Navbar from '../components/Navbar';
import About from './About';
import Projects from './Projects'
import Resume from './Resume'
import Contact from './Contact'

const LandingPage = () => {
    return (
        <>
            <Header />
            <Navbar />
            <About />
            <Projects />
            <Resume />
            <Contact />
        </>
    )
}

export default LandingPage;