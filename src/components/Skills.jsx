import "../styles/Skills.css";
import React from "react";
export default function Skills({dataCV, setDataCV, index}) {
    
    // console.log(dataCV.skillsData[index])


    return (
        <>
            <input 
                type="text"
                placeholder="Title"
                onChange={(e) => {
                    
                    setDataCV({
                        ...dataCV,
                        skillsData: 
                            [
                                dataCV.skillsData.map((item) => {
                                    if(item.id === index) {
                                        return {
                                            ...item, 
                                            title: e.target.value
                                        }
                                    }
                        
                                    return item;
                                })
                                

                                // ...dataCV.skillsData,
                                
                            ]
                    })
                }}
            />
        </>
    );
};

