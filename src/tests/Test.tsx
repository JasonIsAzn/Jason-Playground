import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

export default function App() {
    const [over, setOver] = useState(false);
    return (
        <div className="App">
            <button
                onMouseOver={() => setOver(true)}
                onMouseLeave={() => setOver(false)}
            >
                <FontAwesomeIcon
                    icon={faEnvelope}
                    style={over ? { color: "red" } : {}}
                />
                <span>Dataset Upload</span>
            </button>
        </div>
    );
}