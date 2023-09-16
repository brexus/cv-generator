import { useState } from 'react';
import '../styles/App.css';
import Main from './Main';
import Preview from './Preview';

export default function App() {
    const [fullNameState, setFullNameState] = useState("");
    const [jobTitleState, setJobTitleState] = useState("");
    const [emailState, setEmailState] = useState("");
    const [phoneState, setPhoneState] = useState("");
    const [addressState, setAddressState] = useState("");
    const [dateOfBirthState, setDateOfBirthState] = useState("");

    const [fieldOfStudyState, setFieldOfStudyState] = useState("");
    const [nameOfUniversityState, setNameOfUniversityState] = useState("");
    const [durationEducationState, setDurationEducationState] = useState("");


    const [companyNameState, setCompanyNameState] = useState("");
    const [companyAddressState, setCompanyAddressState] = useState("");
    const [jobTitleWorkExperienceState, setJobTitleWorkExperienceState] = useState("");
    const [durationWorkExperienceState, setDurationWorkExperienceState] = useState("");

    const [titleSkillsState, setTitleSkillsState] = useState("");


    return (
        <>
            <Main
                // PERSONAL DATA
                setFullNameState={setFullNameState}
                fullNameState={fullNameState}

                setJobTitleState={setJobTitleState}
                jobTitleState={jobTitleState}

                setEmailState={setEmailState}
                emailState={emailState}

                setPhoneState={setPhoneState}
                phoneState={phoneState}

                setAddressState={setAddressState}
                addressState={addressState}

                setDateOfBirthState={setDateOfBirthState}
                dateOfBirthState={dateOfBirthState}

                // EDUCATION
                setFieldOfStudyState={setFieldOfStudyState}
                fieldOfStudyState={fieldOfStudyState}

                setNameOfUniversityState={setNameOfUniversityState}
                nameOfUniversityState={nameOfUniversityState}

                setDurationEducationState={setDurationEducationState}
                durationEducationState={durationEducationState}


                // WORK EXPERIENCE
                setCompanyNameState={setCompanyNameState}
                companyNameState={companyNameState}

                setCompanyAddressState={setCompanyAddressState}
                companyAddressState={companyAddressState}

                setJobTitleWorkExperienceState={setJobTitleWorkExperienceState}
                jobTitleWorkExperienceState={jobTitleWorkExperienceState}

                setDurationWorkExperienceState={setDurationWorkExperienceState}
                durationWorkExperienceState={durationWorkExperienceState}


                // SKILLS
                setTitleSkillsState={setTitleSkillsState}
                titleSkillsState={titleSkillsState}

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
