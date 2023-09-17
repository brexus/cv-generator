import "../styles/PersonalData.css";

export default function PersonalData({dataCV, setDataCV}) {

    return (
        <div>

            <input 
                type="text"

                placeholder="Full name"
                onChange={(e) => {

                    setDataCV({
                        ...dataCV,
                        personalData: {
                            ...dataCV.personalData,
                            fullName: e.target.value
                        }
                    })
                }}
            />

            <input 
                type="text" 
                
                placeholder="Job title"
                onChange={(e) => {

                    setDataCV({
                        ...dataCV,
                        personalData: {
                            ...dataCV.personalData,
                            jobTitle: e.target.value
                        }
                    })
                }}
            />

            <input 
                type="text" 
                
                placeholder="E-mail"
                onChange={(e) => {

                    setDataCV({
                        ...dataCV,
                        personalData: {
                            ...dataCV.personalData,
                            email: e.target.value
                        }
                    })
                }}
            />

            <input 
                type="text" 
                
                placeholder="Phone"
                onChange={(e) => {

                    setDataCV({
                        ...dataCV,
                        personalData: {
                            ...dataCV.personalData,
                            phone: e.target.value
                        }
                    })
                }}
            />

            <input 
                type="text" 
                
                placeholder="Address"
                onChange={(e) => {

                    setDataCV({
                        ...dataCV,
                        personalData: {
                            ...dataCV.personalData,
                            address: e.target.value
                        }
                    })
                }}
            />

            <input 
                type="text" 
                
                placeholder="Date of birth"
                onChange={(e) => {

                    setDataCV({
                        ...dataCV,
                        personalData: {
                            ...dataCV.personalData,
                            dateOB: e.target.value
                        }
                    })
                }}
            />

        </div>
    );
};

