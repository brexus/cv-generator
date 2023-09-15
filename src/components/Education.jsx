import "../styles/Education.css";

export default function Education({
    setFieldOfStudyState,
    setNameOfUniversityState,
    setDurationEducationState
}) {

    return (
        <div className="component" id="education">
            <h1>Education</h1>
            <div>
               <input 
                    type="text" 
                    placeholder="Field of study"
                    onChange={(e) => {
                        setFieldOfStudyState(e.target.value);
                    }}
                />

                <input 
                    type="text" 
                    placeholder="Name of university"
                    onChange={(e) => {
                        setNameOfUniversityState(e.target.value);
                    }}
                />

                <input 
                    type="text" 
                    placeholder="Duration"
                    onChange={(e) => {
                        setDurationEducationState(e.target.value);
                    }}
                />

            </div>
        </div>
    );
};
