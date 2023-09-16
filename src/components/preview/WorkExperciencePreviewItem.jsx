import "../../styles/preview/WorkExperiencePreviewItem.css";

export default function WorkExperiencePreviewItem({jobTitle="-", companyName="-", companyAddress="-", duration="-"}) {
    return (
        <div className="workExperience-item">
            <div>
                <div>
                    <span className="workExperience-job-title">{jobTitle}</span>
                    {", "}
                    <span className="company-name">{companyName}</span>
                </div>

                <span className="company-address">{companyAddress}</span>
            </div>

            <span className="workExperience-duration">{duration}</span>

        </div>
    );
};
