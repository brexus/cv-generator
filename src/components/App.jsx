import { useState } from 'react';
import '../styles/App.css';
import Main from './Main';
import Preview from './Preview';

export default function App() {
    const [fullNameState, setFullNameState] = useState("-");
    const [jobTitleState, setJobTitleState] = useState("-");
    const [emailState, setEmailState] = useState("-");
    const [phoneState, setPhoneState] = useState("-");
    const [addressState, setAddressState] = useState("-");
    const [dateOfBirthState, setDateOfBirthState] = useState("-");

    const [fieldOfStudyState, setFieldOfStudyState] = useState("-");
    const [nameOfUniversityState, setNameOfUniversityState] = useState("-");
    const [durationEducationState, setDurationEducationState] = useState("-");


    const [companyNameState, setCompanyNameState] = useState("-");
    const [companyAddressState, setCompanyAddressState] = useState("-");
    const [jobTitleWorkExperienceState, setJobTitleWorkExperienceState] = useState("-");
    const [durationWorkExperienceState, setDurationWorkExperienceState] = useState("-");

    const [titleSkillsState, setTitleSkillsState] = useState("-");


    return (
        <>
            <Main
                // PERSONAL DATA
                setFullNameState={setFullNameState}
                setJobTitleState={setJobTitleState}
                setEmailState={setEmailState}
                setPhoneState={setPhoneState}
                setAddressState={setAddressState}
                setDateOfBirthState={setDateOfBirthState}

                // EDUCATION
                setFieldOfStudyState={setFieldOfStudyState}
                setNameOfUniversityState={setNameOfUniversityState}
                setDurationEducationState={setDurationEducationState}

                // WORK EXPERIENCE
                setCompanyNameState={setCompanyNameState}
                setCompanyAddressState={setCompanyAddressState}
                setJobTitleWorkExperienceState={setJobTitleWorkExperienceState}
                setDurationWorkExperienceState={setDurationWorkExperienceState}

                // SKILLS
                setTitleSkillsState={setTitleSkillsState}
            />

            <Preview 
                // PERSONAL DATA
                fullNameState={fullNameState}
                jobTitleState={jobTitleState}
                emailState={emailState}
                phoneState={phoneState}
                addressState={addressState}
                dateOfBirthState={dateOfBirthState}

                // EDUCATION
                fieldOfStudyState={fieldOfStudyState}
                nameOfUniversityState={nameOfUniversityState}
                durationEducationState={durationEducationState}

                // WORK EXPERIENCE
                companyNameState={companyNameState}
                companyAddressState={companyAddressState}
                jobTitleWorkExperienceState={jobTitleWorkExperienceState}
                durationWorkExperienceState={durationWorkExperienceState}

                // SKILLS
                titleSkillsState={titleSkillsState}
            />
        </>
    );
};
