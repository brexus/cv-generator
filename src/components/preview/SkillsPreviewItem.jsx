import "../../styles/preview/SkillsPreviewItem.css";

export default function SkillsPreviewItem({dataCV, setDataCV, index}) {
    return (
        <ul className="skills-item">
            <li className="skills-title" key={index}>
                {dataCV.skillsData[index].title}
            </li>
        </ul>
    );
};
