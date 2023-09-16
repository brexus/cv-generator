import "../styles/WorkExperience.css";

export default function WorkExperience({
    setCompanyNameState,
    companyNameState,
    setCompanyAddressState,
    companyAddressState,
    setJobTitleWorkExperienceState,
    jobTitleWorkExperienceState,
    setDurationWorkExperienceState,
    durationWorkExperienceState
}) {

    return (
        <div className="component" id="workExperience">
            <h1>Work Experience</h1>
            <div>
               <input 
                    type="text" 
                    value={companyNameState}
                    placeholder="Company Name"
                    onChange={(e) => {
                        setCompanyNameState(e.target.value);
                    }}
                />

                <input 
                    type="text" 
                    value={companyAddressState}
                    placeholder="Company Address"
                    onChange={(e) => {
                        setCompanyAddressState(e.target.value);
                    }}
                />

                <input 
                    type="text" 
                    value={jobTitleWorkExperienceState}
                    placeholder="Job Title"
                    onChange={(e) => {
                        setJobTitleWorkExperienceState(e.target.value);
                    }}
                />

                <input 
                    type="text" 
                    value={durationWorkExperienceState}
                    placeholder="Duration"
                    onChange={(e) => {
                        setDurationWorkExperienceState(e.target.value);
                    }}
                />

            </div>
        </div>
    );
};