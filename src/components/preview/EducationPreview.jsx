import "../../styles/preview/EducationPreview.css";

export default function EducationPreview() {
    return (
        <div id="education-preview">
            <h1 className="section-heading">Education</h1>
            <div className="separator"></div>

            <div className="education-item">
                <p className="field-of-study">Informatyka</p>
                <p className="name-of-university">Politechnika Lubelska</p>
                <p className="education-duration">2020-present</p>
            </div>
        </div>
    );
};