import "../styles/Education.css";

export default function Education({dataCV, setDataCV, index}) {

    return (
        <div>
            <h3>#{index+1}</h3>
            <input 
                type="text" 
                value={dataCV.educationData[index].field}
                placeholder="Field of study"
                onChange={(e) => {
                    setDataCV({
                        ...dataCV,
                        educationData:
                            dataCV.educationData.map((item) => {
                                if(item.id === index) {
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
                            dataCV.educationData.map((item) => {
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
                value={dataCV.educationData[index].duration}
                placeholder="Duration"
                onChange={(e) => {
                    setDataCV({
                        ...dataCV,
                        educationData:
                            dataCV.educationData.map((item) => {
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
