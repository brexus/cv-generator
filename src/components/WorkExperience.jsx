import "../styles/WorkExperience.css";

export default function WorkExperience() {

    return (
        <div className="component" id="workExperience">
            <h1>Work Experience</h1>
            <div>
               <input 
                    type="text" 
                    placeholder="Company Name"
                />

                <input 
                    type="text" 
                    placeholder="Company Address"
                />

                <input 
                    type="text" 
                    placeholder="Job Title"
                />

                <input 
                    type="text" 
                    placeholder="Duration"
                />

            </div>
        </div>
    );
};