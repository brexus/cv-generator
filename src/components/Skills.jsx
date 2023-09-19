import "../styles/Skills.css";
import React from "react";
export default function Skills({dataCV, setDataCV, index}) {
    
    return (
        <div>
            <input 
                type="text"
                value={dataCV.skillsData[index].title}
                placeholder="Title"
                onChange={(e) => {
                    setDataCV({
                        ...dataCV,
                        skillsData:
                            dataCV.skillsData.map((item, i) => {
                                if(i === index) {
                                    return {
                                        ...item, 
                                        title: e.target.value
                                    }
                                }
                                return item;
                            })                            
                    })
                }}
            />

            <button 
                type="button" 
                className="button-x"
                onClick={() => {
                    setDataCV({
                        ...dataCV,
                        skillsData: 
                            dataCV.skillsData.filter((item, i) => {
                                if((dataCV.skillsData.length < 2) || (i !== index)) {
                                    return item;
                                }
                            }) 
                    })

                }}

            >
                X
            </button>
        </div>
    );
};

