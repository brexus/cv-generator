import { useState } from 'react';
import React from 'react';
import '../styles/App.css';
import Main from './Main';
import Preview from './Preview';
import BtnMobilePreview from './BtnMobilePreview';

export default function App() {


    const educationDataFF = (id, field, name, duration) => {
        
        return { id, field, name, duration };
    };

    const workExperienceFF = (id, name, address, jobTitle, duration) => {
        
        return { id, name, address, jobTitle, duration };
    };

    const skillsFF = (id, title) => {
        
        return { id, title };
    };

    const setInitialDataCV = () => {
        return (
            {
                personalData: {
                    fullName: "",
                    jobTitle: "",
                    email: "",
                    phone: "",
                    address: "",
                    dateOB: ""
                },
        
                educationData: [
                    educationDataFF(0, "", "", "")
                ],
        
                workExperienceData: [
                    workExperienceFF(0, "", "", "", "")
                ],
        
                skillsData: [
                    skillsFF(0, "")
                ]
            }
        );
    }

    let mediaQuery = window.matchMedia("(max-width: 1120px)");

    const [dataCV, setDataCV] = useState(setInitialDataCV);
    const [isSmallScreen, setIsSmallScreen] = useState(mediaQuery.matches);
    const [isPreview, setIsPreview] = useState(false);

    const handleMediaQuery = (e) => {
        if (e.matches && !isSmallScreen) {
            setIsSmallScreen(true);
            setIsPreview(false);
        } else if(!e.matches && isSmallScreen) {
            setIsSmallScreen(false);
            setIsPreview(true);
        }
    };

    handleMediaQuery(mediaQuery);
    
    mediaQuery.addEventListener('change', (e) => { handleMediaQuery(e)});
    


    return (
        <>
            <Main dataCV={dataCV} setDataCV={setDataCV} skillsFF={skillsFF} educationDataFF={educationDataFF} workExperienceFF={workExperienceFF} setInitialDataCV={setInitialDataCV} isSmallScreen={isSmallScreen} isPreview={isPreview}/>

            <Preview dataCV={dataCV} setDataCV={setDataCV} isSmallScreen={isSmallScreen} setIsSmallScreen={setIsSmallScreen} isPreview={isPreview}/>

            <BtnMobilePreview isSmallScreen={isSmallScreen} setIsSmallScreen={setIsSmallScreen} setIsPreview={setIsPreview}/>
        </>
    );
};
