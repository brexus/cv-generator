import "../styles/Main.css";
import Header from "./Header";
import PersonalData from "./PersonalData";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import Skills from "./Skills";



export default function Main({dataCV, setDataCV, skillsFF}) {

    return (
        <div id="main">
            <Header dataCV={dataCV} setDataCV={setDataCV}/>


            <div className="component" id="personalData">
                <h1>Personal Data</h1>
                <PersonalData dataCV={dataCV} setDataCV={setDataCV} />
            </div>
            

            <div className="component" id="education">
                <h1>Education</h1>
                <div>
                    <Education dataCV={dataCV} setDataCV={setDataCV} />
                </div>

                <button type="button" id="btn-add-education">Add new</button>
            </div>


            <div className="component" id="workExperience">
                <h1>Work Experience</h1>
                <div>
                    <WorkExperience dataCV={dataCV} setDataCV={setDataCV}/>
                </div>

                <button type="button" id="btn-add-workExperience">Add new</button>
            </div>
            

            <div className="component" id="skills">
                <h1>Skills</h1>
                <div>
                    {dataCV.skillsData.map((item, index) => {
                        return (
                            <Skills key={"skill-" + item.id} dataCV={dataCV} setDataCV={setDataCV} index={item.id}/>
                        );
                    })}
                    
                </div>

                <button 
                    type="button" 
                    id="btn-add-skill" 
                    onClick={() => {
                        setDataCV({
                            ...dataCV,
                            skillsData: [
                                ...dataCV.skillsData,
                                skillsFF((dataCV.skillsData[(dataCV.skillsData.length)-1].id)+1, "")
                            ]
                        })
                        console.log(dataCV.skillsData)
                    }}
                >
                    Add new
                </button>
            </div>

        </div>
    );
};
