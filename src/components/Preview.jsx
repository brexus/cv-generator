import "../styles/Preview.css";
import PersonalDataPreview from "./preview/PersonalDataPreview";
import EducationPreviewItem from "./preview/EducationPreviewItem";
import WorkExperiencePreviewItem from "./preview/WorkExperciencePreviewItem";
import SkillsPreviewItem from "./preview/SkillsPreviewItem";

export default function Preview({dataCV, setDataCV, isSmallScreen, setIsSmallScreen, isPreview}) {

    // 
    // isPreview ? {display: "flex"} : {display: "none"}

    return (
        <div 
            id="preview" 
            style={{
                // display: !isSmallScreen ? "flex" : "none",
                display: !isSmallScreen || (isSmallScreen && isPreview) ? "flex" : "none"
            }}
        >
            <div id="sheet">
                <p id="cv-heading">- CV -</p>

                <PersonalDataPreview dataCV={dataCV} setDataCV={setDataCV}/>

                <div id="education-preview">
                    <h1 className="section-heading">Education</h1>
                    <div className="separator"></div>

                    {dataCV.educationData.map((item, index) => {
                        return (
                            <EducationPreviewItem key={"educationPreview" + index} dataCV={dataCV} setDataCV={setDataCV} index={index}/>
                        );
                    })}
                    
                </div>

                <div id="workExperience-preview">
                    <h1 className="section-heading">Work Experience</h1>
                    <div className="separator"></div>

                    {dataCV.workExperienceData.map((item, index) => {
                        return (
                            <WorkExperiencePreviewItem key={"workExperiencePreview" + index} dataCV={dataCV} setDataCV={setDataCV} index={index}/>
                        );
                    })}
                </div>

                <div id="skills-preview">
                    <h1 className="section-heading">Skills</h1>
                    <div className="separator"></div>
                    
                    <ul id="skills-ul">
                        {dataCV.skillsData.map((item, index) => {
                            return (
                                <SkillsPreviewItem key={"skillsPreview" + index} dataCV={dataCV} setDataCV={setDataCV} index={index}/>
                            );
                        })}
                    </ul>

                </div>

            </div>
        </div>
    );
};
