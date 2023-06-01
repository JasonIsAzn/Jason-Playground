import React from "react";
const GlobalContext = React.createContext({
    // Landing Page
    resumeOpen: false,
    setResumeOpen: (value: boolean) => { },
    contactOpen: false,
    setContactOpen: (value: boolean) => { },
    aboutOpen: false,
    setAboutOpen: (value: boolean) => { },
});


export default GlobalContext;