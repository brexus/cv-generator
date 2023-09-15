import "../styles/PersonalData.css";

export default function PersonalData({
    setFullNameState,
    setJobTitleState,
    setEmailState,
    setPhoneState,
    setAddressState,
    setDateOfBirthState
}) {

    return (
        <div className="component" id="personalData">
            <h1>Personal Data</h1>
            <div>

               <input 
                    type="text" 
                    placeholder="Full name"
                    onChange={(e) => {
                        setFullNameState(e.target.value);
                    }}
                />

                <input 
                    type="text" 
                    placeholder="Job title"
                    onChange={(e) => {
                        setJobTitleState(e.target.value);
                    }}
                />

                <input 
                    type="text" 
                    placeholder="E-mail"
                    onChange={(e) => {
                        setEmailState(e.target.value);
                    }}
                />

                <input 
                    type="text" 
                    placeholder="Phone"
                    onChange={(e) => {
                        setPhoneState(e.target.value);
                    }}
                />

                <input 
                    type="text" 
                    placeholder="Address"
                    onChange={(e) => {
                        setAddressState(e.target.value);
                    }}
                />

                <input 
                    type="text" 
                    placeholder="Date of birth"
                    onChange={(e) => {
                        setDateOfBirthState(e.target.value);
                    }}
                />

            </div>
        </div>
    );
};