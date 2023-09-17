import "../../styles/preview/WorkExperiencePreviewItem.css";

export default function WorkExperiencePreviewItem({dataCV, setDataCV}) {
    return (
        <div className="workExperience-item">
            <div>
                <div>
                    <span className="workExperience-job-title">{}</span>
                    {", "}
                    <span className="company-name">{}</span>
                </div>

                <span className="company-address">{}</span>
            </div>

            <span className="workExperience-duration">{}</span>

        </div>
    );
};
