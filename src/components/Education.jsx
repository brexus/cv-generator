import "../styles/Education.css";

export default function Education({dataCV, setDataCV, index}) {

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
                            educationData: 
                                dataCV.educationData.filter((item, i) => {
                                    if((dataCV.educationData.length < 2) || (i !== index)) {
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
                value={dataCV.educationData[index].field}
                placeholder="Field of study"
                onChange={(e) => {
                    setDataCV({
                        ...dataCV,
                        educationData:
                            dataCV.educationData.map((item, i) => {
                                if(i === index) {
                                    return {
                                        ...item, 
                                        field: e.target.value
                                    }
                                }
                                return item;
                            })                            
                    })
                }}
            />

            <input 
                type="text" 
                value={dataCV.educationData[index].name}
                placeholder="Name of university"
                onChange={(e) => {
                    setDataCV({
                        ...dataCV,
                        educationData:
                            dataCV.educationData.map((item, i) => {
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
                value={dataCV.educationData[index].duration}
                placeholder="Duration"
                onChange={(e) => {
                    setDataCV({
                        ...dataCV,
                        educationData:
                            dataCV.educationData.map((item, i) => {
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
