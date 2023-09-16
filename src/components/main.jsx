import "../styles/Main.css";
import Header from "./Header";
import PersonalData from "./PersonalData";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import Skills from "./Skills";

export default function Main({
    // PERSONAL DATA
    setFullNameState,
    fullNameState,
    setJobTitleState,
    jobTitleState,
    setEmailState,
    emailState,
    setPhoneState,
    phoneState,
    setAddressState,
    addressState,
    setDateOfBirthState,
    dateOfBirthState,

    // EDUCATION
    setFieldOfStudyState,
    fieldOfStudyState,
    setNameOfUniversityState,
    nameOfUniversityState,
    setDurationEducationState,
    durationEducationState,

    // WORK EXPERIENCE
    setCompanyNameState,
    companyNameState,
    setCompanyAddressState,
    companyAddressState,
    setJobTitleWorkExperienceState,
    jobTitleWorkExperienceState,
    setDurationWorkExperienceState,
    durationWorkExperienceState,

    // SKILLS
    setTitleSkillsState
}) {

    let skills_tab = [""];

    // const addNewSkill = () => {
    //     setTitleSkillsState([])
    // };


    return (
        <div id="main">
            <Header 
                setFullNameState={setFullNameState}
                setJobTitleState={setJobTitleState}
                setEmailState={setEmailState}
                setPhoneState={setPhoneState}
                setAddressState={setAddressState}
                setDateOfBirthState={setDateOfBirthState}
                setFieldOfStudyState={setFieldOfStudyState}
                setNameOfUniversityState={setNameOfUniversityState}
                setDurationEducationState={setDurationEducationState}
                setCompanyNameState={setCompanyNameState}
                setCompanyAddressState={setCompanyAddressState}
                setJobTitleWorkExperienceState={setJobTitleWorkExperienceState}
                setDurationWorkExperienceState={setDurationWorkExperienceState}
                setTitleSkillsState={setTitleSkillsState}
            />

            <PersonalData 
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
            />

            <Education 
                setFieldOfStudyState={setFieldOfStudyState}
                fieldOfStudyState={fieldOfStudyState}

                setNameOfUniversityState={setNameOfUniversityState}
                nameOfUniversityState={nameOfUniversityState}

                setDurationEducationState={setDurationEducationState}
                durationEducationState={durationEducationState}
            />

            <WorkExperience 
                setCompanyNameState={setCompanyNameState}
                companyNameState={companyNameState}

                setCompanyAddressState={setCompanyAddressState}
                companyAddressState={companyAddressState}

                setJobTitleWorkExperienceState={setJobTitleWorkExperienceState}
                jobTitleWorkExperienceState={jobTitleWorkExperienceState}

                setDurationWorkExperienceState={setDurationWorkExperienceState}
                durationWorkExperienceState={durationWorkExperienceState}
            />


            <div className="component" id="skills">
                <h1>Skills</h1>
                <div>
                        <Skills 
                            setTitleSkillsState={setTitleSkillsState}
                        />

                    {/* {skills_tab.map((skill) => {
                        return (
                            
                        );
                    })} */}

                    {/* <button onClick={addNewSkill()} type="text">ADD</button> */}
                </div>
            </div>

        </div>
    );
};
