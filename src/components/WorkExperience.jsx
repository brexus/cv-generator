import "../styles/WorkExperience.css";

export default function WorkExperience({
    setCompanyNameState,
    setCompanyAddressState,
    setJobTitleWorkExperienceState,
    setDurationWorkExperienceState
}) {

    return (
        <div className="component" id="workExperience">
            <h1>Work Experience</h1>
            <div>
               <input 
                    type="text" 
                    placeholder="Company Name"
                    onChange={(e) => {
                        setCompanyNameState(e.target.value);
                    }}
                />

                <input 
                    type="text" 
                    placeholder="Company Address"
                    onChange={(e) => {
                        setCompanyAddressState(e.target.value);
                    }}
                />

                <input 
                    type="text" 
                    placeholder="Job Title"
                    onChange={(e) => {
                        setJobTitleWorkExperienceState(e.target.value);
                    }}
                />

                <input 
                    type="text" 
                    placeholder="Duration"
                    onChange={(e) => {
                        setDurationWorkExperienceState(e.target.value);
                    }}
                />

            </div>
        </div>
    );
};