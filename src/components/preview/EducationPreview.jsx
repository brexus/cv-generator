import "../../styles/preview/EducationPreview.css";

export default function EducationPreview() {
    return (
        <div id="education-preview">
            <h1 className="section-heading">Education</h1>
            <div className="separator"></div>

            <p className="education-item">
                <div>
                    <span className="field-of-study">Informatyka,</span>
                    <span className="name-of-university">Politechnika Lubelska</span> 
                </div>

                <span className="education-duration">2020-present</span> 
            </p>
        </div>
    );
};