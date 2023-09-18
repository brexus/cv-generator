import "../styles/WorkExperience.css";

export default function WorkExperience({dataCV, setDataCV, index}) {

    return (
        <div>
            <h3>#{index+1}</h3>
            <input 
                type="text" 
                value={dataCV.workExperienceData[index].name}
                placeholder="Company Name"
                onChange={(e) => {
                    setDataCV({
                        ...dataCV,
                        workExperienceData:
                            dataCV.workExperienceData.map((item) => {
                                if(item.id === index) {
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
                            dataCV.workExperienceData.map((item) => {
                                if(item.id === index) {
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
                            dataCV.workExperienceData.map((item) => {
                                if(item.id === index) {
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
                            dataCV.workExperienceData.map((item) => {
                                if(item.id === index) {
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

