import "../../styles/preview/SkillsPreviewItem.css";

export default function SkillsPreviewItem({dataCV, setDataCV, index}) {
    return (
        <li className="skills-item" key={index}>
            {dataCV.skillsData[index].title}
        </li>
    );
};
