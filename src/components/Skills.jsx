import "../styles/Skills.css";

export default function Skills({
    setTitleSkillsState
}) {

    return (
        <input 
            type="text" 
            placeholder="Title"
            onChange={(e) => {
                setTitleSkillsState(e.target.value);
            }}
        />
    );
};

