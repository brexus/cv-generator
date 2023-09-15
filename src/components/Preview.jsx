import "../styles/Preview.css";
import PersonalDataPreview from "./preview/PersonalDataPreview";
import EducationPreviewItem from "./preview/EducationPreviewItem";
import WorkExperiencePreviewItem from "./preview/WorkExperciencePreviewItem";
import SkillsPreviewItem from "./preview/SkillsPreviewItem";

export default function Preview({
    // PERSONAL DATA
    fullNameState,
    jobTitleState,
    emailState,
    phoneState,
    addressState,
    dateOfBirthState,

    // EDUCATION
    fieldOfStudyState,
    nameOfUniversityState,
    durationEducationState,

    // WORK EXPERIENCE
    companyNameState,
    companyAddressState,
    jobTitleWorkExperienceState,
    durationWorkExperienceState,

    // SKILLS
    titleSkillsState
}) {
    return (
        <div id="preview">
            <div id="sheet">
                <p id="cv-heading">- CV -</p>

                <PersonalDataPreview 
                    fullName={fullNameState} 
                    jobTitle={jobTitleState}
                    email={emailState}
                    phone={phoneState}
                    dateOfBirth={dateOfBirthState}
                    address={addressState}
                />

                <div id="education-preview">
                    <h1 className="section-heading">Education</h1>
                    <div className="separator"></div>
                    <EducationPreviewItem 
                        fieldOfStudy={fieldOfStudyState} 
                        nameOfUniversity={nameOfUniversityState} 
                        educationDuration={durationEducationState}
                    />
                </div>

                <div id="workExperience-preview">
                    <h1 className="section-heading">Work Experience</h1>
                    <div className="separator"></div>
                    <WorkExperiencePreviewItem 
                        jobTitle={jobTitleWorkExperienceState}
                        companyName={companyNameState}
                        companyAddress={companyAddressState}
                        duration={durationWorkExperienceState}
                    />
                </div>

                <div id="skills-preview">
                    <h1 className="section-heading">Skills</h1>
                    <div className="separator"></div>
                    <SkillsPreviewItem skillsTitle={titleSkillsState}/>

                </div>

            </div>
        </div>
    );
};
