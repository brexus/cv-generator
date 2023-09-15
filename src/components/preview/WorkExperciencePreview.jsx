import "../../styles/preview/WorkExperiencePreview.css";

export default function WorkExperiencePreview() {
    return (
        <div id="workExperience-preview">
            <h1 className="section-heading">Work Experience</h1>
            <div className="separator"></div>

            <div className="workExperience-item">
                <p className="company-name">Lemar - okna i drzwi</p>
                <p className="company-address">al. Lotników Polskich 68A, 21-040 Świdnik</p>
                <p className="workExperience-job-title">Monter okien</p>
                <p className="workExperience-duration">06.2021-07.2021</p>
            </div>
        </div>
    );
};