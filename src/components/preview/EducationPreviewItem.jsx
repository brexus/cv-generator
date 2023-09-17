import "../../styles/preview/EducationPreviewItem.css";

export default function EducationPreviewItem({dataCV, setDataCV}) {
    return (
        <div className="education-item">
            <p>
                <span className="field-of-study">{},</span>
                <span className="name-of-university">{}</span> 
            </p>

            <span className="education-duration">{}</span> 
        </div>
    );
};
