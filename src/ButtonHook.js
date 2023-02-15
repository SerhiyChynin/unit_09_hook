import React, { useState } from "react";

export default function ButtonHook() {
    const [buttonText, setButtonText] = useState('Push Hook');
    return (
        <>
            <div>
            <button onClick={() => setButtonText('Yes! It work! All right!')}>{ buttonText}</button>
            </div>
        </>
    )
}
