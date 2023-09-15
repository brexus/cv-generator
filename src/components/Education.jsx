import "../styles/Education.css";

export default function Education() {

    return (
        <div className="component" id="education">
            <h1>Education</h1>
            <div>
               <input 
                    type="text" 
                    placeholder="Field of study"
                />

                <input 
                    type="text" 
                    placeholder="Name of university"
                />

                <input 
                    type="text" 
                    placeholder="Duration"
                />

            </div>
        </div>
    );
};