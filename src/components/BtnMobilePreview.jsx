import { useState } from "react";
import "../styles/BtnMobilePreview.css";



export default function BtnMobilePreview({isSmallScreen, setIsSmallScreen, setIsPreview}) {

    
    return (
        <>
            <button
                id="btn-preview-mobile"
                type="button"
                styles={isSmallScreen ? "flex" : "none"}
                onClick={() => {
                    setIsPreview(current => !current)
                }}
            >
                EYE
            </button>
        </>
    );
    
};
