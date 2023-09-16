import "../styles/Education.css";

export default function Education({
    setFieldOfStudyState,
    fieldOfStudyState,

    setNameOfUniversityState,
    nameOfUniversityState,

    setDurationEducationState,
    durationEducationState,
}) {

    return (
        <div className="component" id="education">
            <h1>Education</h1>
            <div>
               <input 
                    type="text" 
                    value={fieldOfStudyState}
                    placeholder="Field of study"
                    onChange={(e) => {
                        setFieldOfStudyState(e.target.value);
                    }}
                />

                <input 
                    type="text" 
                    value={nameOfUniversityState}
                    placeholder="Name of university"
                    onChange={(e) => {
                        setNameOfUniversityState(e.target.value);
                    }}
                />

                <input 
                    type="text" 
                    value={durationEducationState}
                    placeholder="Duration"
                    onChange={(e) => {
                        setDurationEducationState(e.target.value);
                    }}
                />

            </div>
        </div>
    );
};
