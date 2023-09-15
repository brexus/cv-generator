import "../styles/Main.css";
import Header from "./Header";
import PersonalData from "./PersonalData";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import Skills from "./Skills";

export default function Main({
    // PERSONAL DATA
    setFullNameState,
    setJobTitleState,
    setEmailState,
    setPhoneState,
    setAddressState,
    setDateOfBirthState,

    // EDUCATION
    setFieldOfStudyState,
    setNameOfUniversityState,
    setDurationEducationState,

    // WORK EXPERIENCE
    setCompanyNameState,
    setCompanyAddressState,
    setJobTitleWorkExperienceState,
    setDurationWorkExperienceState,

    // SKILLS
    setTitleSkillsState
}) {


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
                setJobTitleState={setJobTitleState}
                setEmailState={setEmailState}
                setPhoneState={setPhoneState}
                setAddressState={setAddressState}
                setDateOfBirthState={setDateOfBirthState}
            />

            <Education 
                setFieldOfStudyState={setFieldOfStudyState}
                setNameOfUniversityState={setNameOfUniversityState}
                setDurationEducationState={setDurationEducationState}
            />

            <WorkExperience 
                setCompanyNameState={setCompanyNameState}
                setCompanyAddressState={setCompanyAddressState}
                setJobTitleWorkExperienceState={setJobTitleWorkExperienceState}
                setDurationWorkExperienceState={setDurationWorkExperienceState}
            />

            <Skills 
                setTitleSkillsState={setTitleSkillsState}
            />
        </div>
    );
};
