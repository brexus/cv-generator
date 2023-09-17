import { useState } from 'react';
import React from 'react';
import '../styles/App.css';
import Main from './Main';
import Preview from './Preview';


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

    const [dataCV, setDataCV] = useState({
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

        workExperience: [
            workExperienceFF(0, "", "", "", "")
        ],

        skillsData: [
            skillsFF(0, "")
            // skillsFF(1, "Obsluga programow MS Office")
        ]
    });

    return (
        <>
            <Main dataCV={dataCV} setDataCV={setDataCV} skillsFF={skillsFF} />

            {/* <Preview dataCV={dataCV} setDataCV={setDataCV}/> */}
        </>
    );
};
