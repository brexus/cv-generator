import "../../styles/preview/WorkExperiencePreviewItem.css";

export default function WorkExperiencePreviewItem({dataCV, setDataCV, index}) {
    return (
        <div className="workExperience-item">
            <div>
                <div>
                    <span className="workExperience-job-title">{dataCV.workExperienceData[index].jobTitle}</span>
                    {", "}
                    <span className="company-name">{dataCV.workExperienceData[index].name}</span>
                </div>

                <span className="company-address">{dataCV.workExperienceData[index].address}</span>
            </div>

            <span className="workExperience-duration">{dataCV.workExperienceData[index].duration}</span>

        </div>
    );
};
