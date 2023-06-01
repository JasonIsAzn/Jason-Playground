import { useEffect, useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';

import Header from './Header';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects'
import Resume from './Resume'
import Contact from './Contact'
import Footer from './Footer'

const LandingPage = () => {
    const { resumeOpen, setResumeOpen,
        contactOpen, setContactOpen,
        aboutOpen, setAboutOpen
    } = useContext(GlobalContext);

    useEffect(() => {
        if (aboutOpen) {
            setResumeOpen(false);
            setContactOpen(false);
        }
    }, [aboutOpen, setResumeOpen, setContactOpen]);

    useEffect(() => {
        if (resumeOpen) {
            setAboutOpen(false);
            setContactOpen(false);
        }
    }, [resumeOpen, setAboutOpen, setContactOpen]);

    useEffect(() => {
        if (contactOpen) {
            setAboutOpen(false);
            setResumeOpen(false);
        }
    }, [contactOpen, setAboutOpen, setResumeOpen]);


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