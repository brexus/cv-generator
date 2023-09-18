import "../styles/PersonalData.css";

export default function PersonalData({dataCV, setDataCV}) {

    return (
        <div>

            <input 
                type="text"
                value={dataCV.personalData.fullName}
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
                value={dataCV.personalData.jobTitle}
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
                value={dataCV.personalData.email}
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
                value={dataCV.personalData.phone}
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
                value={dataCV.personalData.address}
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
                value={dataCV.personalData.dateOB}
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

