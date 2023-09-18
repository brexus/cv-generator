import "../../styles/preview/EducationPreviewItem.css";

export default function EducationPreviewItem({dataCV, setDataCV, index}) {
    return (
        <div className="education-item">
            <p>
                <span className="field-of-study">{dataCV.educationData[index].field},</span>
                <span className="name-of-university">{dataCV.educationData[index].name}</span> 
            </p>

            <span className="education-duration">{dataCV.educationData[index].duration}</span> 
        </div>
    );
};
