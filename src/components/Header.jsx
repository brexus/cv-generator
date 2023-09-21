import "../styles/Header.css";
import React, { useRef } from 'react';

export default function Header({dataCV, setDataCV, setInitialDataCV, skillsFF, educationDataFF, workExperienceFF}) {

    const loadExamplePreview = () => {
        
        setDataCV({
            personalData: {
                fullName: "Anna Kowalska",
                jobTitle: "Księgowa",
                email: "a.kowalska74@gmail.com",
                phone: "666777888",
                address: "ul. Nowatorska 74A, Warszawa",
                dateOB: "21.07.1974r."
            },
    
            educationData: [
                educationDataFF(0, "Ekonomia", "UMCS Lublin", "1996-1999"),
                educationDataFF(1, "Human Resources", "SGH", "2002-2006")
            ],
    
            workExperienceData: [
                workExperienceFF(0, "Microsoft", "ul.Racławkowska 12/65", "Księgowość", "2000-2020"),
                workExperienceFF(1, "Google", "ul.Nowatorska", "Księgowość", "2020-now")
            ],
    
            skillsData: [
                skillsFF(0, "Obsługa programów MS Office (Excel, Word, PowerPoint itp.)"),
                skillsFF(1, "Obsługa programu Comarch ERP XT"),
                skillsFF(2, "Znajmość języka angielskiego na poziomie C1")
            ]
        })

    };

    const fullReset = () => {
        setDataCV(setInitialDataCV);
    };

    const printPDF = () => {
        const preview = document.getElementById("sheet");

        let opt = {
            margin:       0.5,
            filename:     'myCV.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { dpi: 96, letterRendering: true },
            jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
          };

        html2pdf().set(opt).from(preview).save();
    };

    return (
        <div className="component" id="header">
            <h1>CV Generator</h1>
            <div id="header-buttons">
                <button onClick={printPDF}>Save</button>
                <button onClick={loadExamplePreview}>Example</button>
                <button onClick={fullReset}>Reset</button>

            </div>
        </div>
    );
};
