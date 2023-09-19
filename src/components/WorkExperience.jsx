import "../styles/WorkExperience.css";

export default function WorkExperience({dataCV, setDataCV, index}) {

    return (
        <div>
            <div className="component-title-container">
                <h3>#{index+1}</h3>
                <button 
                    type="button" 
                    className="button-x"
                    onClick={() => {
                        setDataCV({
                            ...dataCV,
                            workExperienceData: 
                                dataCV.workExperienceData.filter((item, i) => {
                                    if((dataCV.workExperienceData.length < 2) || (i !== index)) {
                                        return item;
                                    }
                                }) 
                        })

                    }}
                >
                    X
                </button>
            </div>

            <input 
                type="text" 
                value={dataCV.workExperienceData[index].name}
                placeholder="Company Name"
                onChange={(e) => {
                    setDataCV({
                        ...dataCV,
                        workExperienceData:
                            dataCV.workExperienceData.map((item, i) => {
                                if(i === index) {
                                    return {
                                        ...item, 
                                        name: e.target.value
                                    }
                                }
                                return item;
                            })                            
                    })
                }}
            />

            <input 
                type="text" 
                value={dataCV.workExperienceData[index].address}
                placeholder="Company Address"
                onChange={(e) => {
                    setDataCV({
                        ...dataCV,
                        workExperienceData:
                            dataCV.workExperienceData.map((item, i) => {
                                if(i === index) {
                                    return {
                                        ...item, 
                                        address: e.target.value
                                    }
                                }
                                return item;
                            })                            
                    })
                }}
            />

            <input 
                type="text" 
                value={dataCV.workExperienceData[index].jobTitle}
                placeholder="Job Title"
                onChange={(e) => {
                    setDataCV({
                        ...dataCV,
                        workExperienceData:
                            dataCV.workExperienceData.map((item, i) => {
                                if(i === index) {
                                    return {
                                        ...item, 
                                        jobTitle: e.target.value
                                    }
                                }
                                return item;
                            })                            
                    })
                }}
            />

            <input 
                type="text" 
                value={dataCV.workExperienceData[index].duration}
                placeholder="Duration"
                onChange={(e) => {
                    setDataCV({
                        ...dataCV,
                        workExperienceData:
                            dataCV.workExperienceData.map((item, i) => {
                                if(i === index) {
                                    return {
                                        ...item, 
                                        duration: e.target.value
                                    }
                                }
                                return item;
                            })                            
                    })
                }}
            />

        </div>
    );
};

