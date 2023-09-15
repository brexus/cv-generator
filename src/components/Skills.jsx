import "../styles/Skills.css";

export default function Skills({
    setTitleSkillsState
}) {

    return (
        <div className="component" id="skills">
            <h1>Skills</h1>
            <div>
               <input 
                    type="text" 
                    placeholder="Title"
                    onChange={(e) => {
                        setTitleSkillsState(e.target.value);
                    }}
                />

            </div>
        </div>
    );
};