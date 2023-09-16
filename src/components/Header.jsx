import "../styles/Header.css";

function Button({text, funct}) {

    return (
        <button type="text" onClick={funct}>
            {text}
        </button>
    );
};

export default function Header({
    setFullNameState,
    setJobTitleState,
    setEmailState,
    setPhoneState,
    setAddressState,
    setDateOfBirthState,
    setFieldOfStudyState,
    setNameOfUniversityState,
    setDurationEducationState,
    setCompanyNameState,
    setCompanyAddressState,
    setJobTitleWorkExperienceState,
    setDurationWorkExperienceState,
    setTitleSkillsState
}) {

    const loadExamplePreview = () => {
        setFullNameState("Anna Kowalska");
        setJobTitleState("Księgowa");
        setEmailState("a.kowalska74@gmail.com");
        setPhoneState("666777888");
        setAddressState("ul. Nowatorska 74A, Warszawa");
        setDateOfBirthState("21.07.1974r.");
        setFieldOfStudyState("Ekonomia");
        setNameOfUniversityState("UMCS Lublin");
        setDurationEducationState("1996-1999");
        setCompanyNameState("Microsoft");
        setCompanyAddressState("ul.Racławkowska 12/65");
        setJobTitleWorkExperienceState("Księgowa");
        setDurationWorkExperienceState("2000-2023");
        setTitleSkillsState("Obsługa pakietu Microsoft Office (Excel, Word itp.)");
    };

    const fullReset = () => {
        setFullNameState("");
        setJobTitleState("");
        setEmailState("");
        setPhoneState("");
        setAddressState("");
        setDateOfBirthState("");
        setFieldOfStudyState("");
        setNameOfUniversityState("");
        setDurationEducationState("");
        setCompanyNameState("");
        setCompanyAddressState("");
        setJobTitleWorkExperienceState("");
        setDurationWorkExperienceState("");
        setTitleSkillsState("");
    };

    const printPDF = () => {
        const preview = document.getElementById("sheet");
        console.log(preview);
        window.print();
        // preview.contentWindow.print();
    };

    return (
        <div className="component" id="header">
            <h1>CV Generator</h1>
            <div id="header-buttons">
                <Button text="Save" funct={printPDF}/>
                <Button text="Example" funct={loadExamplePreview} />
                <Button text="Reset" funct={fullReset} />
            </div>
        </div>
    );
};
