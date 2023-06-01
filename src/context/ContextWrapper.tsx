import React, { useState } from "react";
import GlobalContext from "./GlobalContext";

// Define Props type
type Props = {
    children: React.ReactNode;
};

const ContextWrapper: React.FC<Props> = ({ children }) => {
    const [resumeOpen, setResumeOpen] = useState(false);
    const [contactOpen, setContactOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);

    return (
        <GlobalContext.Provider
            value={{
                resumeOpen,
                setResumeOpen,
                contactOpen,
                setContactOpen,
                aboutOpen,
                setAboutOpen,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

export default ContextWrapper;