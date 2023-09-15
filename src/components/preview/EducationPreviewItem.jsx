import "../../styles/preview/EducationPreviewItem.css";

export default function EducationPreviewItem({fieldOfStudy="-", nameOfUniversity="-", educationDuration="-"}) {
    return (
        <div className="education-item">
            <p>
                <span className="field-of-study">{fieldOfStudy},</span>
                <span className="name-of-university">{nameOfUniversity}</span> 
            </p>

            <span className="education-duration">{educationDuration}</span> 
        </div>
    );
};
