import "../styles/PersonalData.css";

export default function PersonalData({
    setFullNameState,
    fullNameState,

    setJobTitleState,
    jobTitleState,

    setEmailState,
    emailState,

    setPhoneState,
    phoneState,

    setAddressState,
    addressState,

    setDateOfBirthState,
    dateOfBirthState
}) {

    return (
        <div className="component" id="personalData">
            <h1>Personal Data</h1>
            <div>

               <input 
                    type="text"
                    value={fullNameState}
                    placeholder="Full name"
                    onChange={(e) => {
                        setFullNameState(e.target.value);
                    }}
                />

                <input 
                    type="text" 
                    value={jobTitleState}
                    placeholder="Job title"
                    onChange={(e) => {
                        setJobTitleState(e.target.value);
                    }}
                />

                <input 
                    type="text" 
                    value={emailState}
                    placeholder="E-mail"
                    onChange={(e) => {
                        setEmailState(e.target.value);
                    }}
                />

                <input 
                    type="text" 
                    value={phoneState}
                    placeholder="Phone"
                    onChange={(e) => {
                        setPhoneState(e.target.value);
                    }}
                />

                <input 
                    type="text" 
                    value={addressState}
                    placeholder="Address"
                    onChange={(e) => {
                        setAddressState(e.target.value);
                    }}
                />

                <input 
                    type="text" 
                    value={dateOfBirthState}
                    placeholder="Date of birth"
                    onChange={(e) => {
                        setDateOfBirthState(e.target.value);
                    }}
                />

            </div>
        </div>
    );
};