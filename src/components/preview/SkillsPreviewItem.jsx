import "../../styles/preview/SkillsPreviewItem.css";

export default function SkillsPreviewItem({skillsTitle="-"}) {
    return (
        <ul className="skills-item">
            <li className="skills-title">{skillsTitle}</li>
        </ul>
    );
};
